import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Plus, Bell, FolderOpen, Video, Film, BarChart2, RefreshCw, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import Sidebar from '../components/layout/Sidebar';
import StatWidget from '../components/dashboard/StatWidget';
import ProjectCard from '../components/dashboard/ProjectCard';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import QuickActions from '../components/dashboard/QuickActions';
import SkeletonCard from '../components/ui/SkeletonCard';
import ThemeToggle from '../components/ui/ThemeToggle';
import { useAuth } from '../hooks/useAuth';
import { projectService } from '../services/project.service';
import { useCommandPalette } from '../hooks/useCommandPalette';
import CommandPalette from '../components/ui/CommandPalette';
import { staggerContainer, fadeUpVariant } from '../utils/animations';

export default function Dashboard() {
  const { user } = useAuth();
  const { open, setOpen } = useCommandPalette();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await projectService.getAll();
      setProjects(res.data?.data?.projects || []);
    } catch {
      toast.error('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  const deleteProject = async (id) => {
    try {
      await projectService.remove(id);
      setProjects(p => p.filter(x => x._id !== id));
      toast.success('Project deleted');
    } catch {
      toast.error('Failed to delete project');
    }
  };

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const firstName = user?.name?.split(' ')[0] || 'Creator';

  return (
    <PageTransition>
      <div className="flex min-h-screen" style={{ background: 'var(--color-bg)' }}>
        <Sidebar />

        <main className="flex-1 md:ml-[236px] min-w-0 transition-all duration-300">
          {/* Sticky header */}
          <div
            className="sticky top-0 z-30 px-4 sm:px-6 py-4 flex items-center justify-between border-b"
            style={{
              background: 'rgba(var(--color-bg-raw, 9,9,15), 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div>
              <h1 className="font-display font-bold text-lg sm:text-xl" style={{ color: 'var(--color-text)' }}>
                {greeting}, {firstName} 👋
              </h1>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* ⌘K search */}
              <motion.button
                onClick={() => setOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs border transition-all"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', background: 'rgba(109,40,217,0.04)' }}
                whileHover={{ borderColor: 'rgba(109,40,217,0.4)', color: 'var(--color-text)' }}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
                <kbd className="font-mono opacity-50 text-xs">⌘K</kbd>
              </motion.button>

              {/* Theme toggle — visible in dashboard */}
              <ThemeToggle />

              {/* Notification */}
              <motion.button className="relative p-2.5 rounded-xl glow-border" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
                <Bell className="w-4 h-4 text-purple-400" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              </motion.button>

              {/* New project */}
              <Link to="/projects/create">
                <motion.button
                  className="btn-primary px-4 py-2 text-sm flex items-center gap-1.5"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">New Project</span>
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 space-y-8">
            {/* Stats grid */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible"
              className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: FolderOpen, label: 'Total Projects', value: projects.length, color: '#6d28d9' },
                { icon: Video, label: 'Videos Created', value: projects.filter(p => p.videoId).length, color: '#0891b2' },
                { icon: Film, label: 'Scenes Generated', value: projects.length * 4, color: '#7c3aed' },
                { icon: BarChart2, label: 'Hours Saved', value: projects.length * 3, suffix: 'h', color: '#d97706' },
              ].map(s => (
                <motion.div key={s.label} variants={fadeUpVariant}>
                  <StatWidget {...s} />
                </motion.div>
              ))}
            </motion.div>

            {/* Projects section */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                  Your Projects
                </h2>
                <div className="flex gap-2">
                  <QuickActions />
                  <motion.button onClick={fetchProjects} whileHover={{ scale: 1.06 }} className="p-2 rounded-xl glow-border">
                    <RefreshCw className="w-4 h-4 text-purple-400" />
                  </motion.button>
                </div>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => <SkeletonCard key={i} variant="project" />)}
                </div>
              ) : projects.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="card p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(109,40,217,0.1)' }}>
                    <FolderOpen className="w-8 h-8 text-purple-400" />
                  </div>
                  <p className="font-display font-bold text-lg mb-2" style={{ color: 'var(--color-text)' }}>
                    No projects yet
                  </p>
                  <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                    Create your first AI video project and let the magic begin
                  </p>
                  <Link to="/projects/create">
                    <motion.button className="btn-primary px-8 py-3 text-sm" whileHover={{ scale: 1.04 }}>
                      <Plus className="w-4 h-4 inline mr-2" />
                      Create First Project
                    </motion.button>
                  </Link>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {projects.map((p, i) => (
                    <ProjectCard key={p._id} project={p} index={i} onDelete={deleteProject} />
                  ))}
                </div>
              )}
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2">
                <ActivityFeed />
              </div>
              <div className="card p-5">
                <h3 className="font-display font-semibold text-sm mb-4" style={{ color: 'var(--color-text)' }}>
                  Quick Start
                </h3>
                <div className="space-y-1">
                  {[
                    ['Create a project', '/projects/create'],
                    ['Generate AI video', '/projects/create'],
                    ['View profile', '/profile'],
                  ].map(([label, to]) => (
                    <Link key={label} to={to}>
                      <motion.div
                        className="flex items-center justify-between p-3 rounded-xl text-sm transition-colors"
                        style={{ color: 'var(--color-text-secondary)' }}
                        whileHover={{ background: 'rgba(109,40,217,0.07)', color: 'var(--color-text)' }}
                      >
                        <span>{label}</span>
                        <span className="text-purple-400 text-xs font-bold">→</span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </PageTransition>
  );
}
