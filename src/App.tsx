/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Settings, 
  ChevronRight, 
  Search, 
  Bell, 
  Edit3, 
  Play, 
  MoreHorizontal, 
  ArrowLeft, 
  ArrowRight, 
  Maximize2,
  Layers,
  MessageCircle,
  FileText,
  Share2,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SidebarItem = ({ icon: Icon, label, active = false, hasSubmenu = false, onClick }: any) => (
  <motion.button 
    whileHover={{ x: 4 }}
    onClick={onClick}
    className={`w-full group glass-nav-item ${active ? 'glass-nav-item-active' : ''}`}
  >
    <Icon size={20} className={active ? 'text-brand-purple' : 'text-gray-400 group-hover:text-brand-purple'} />
    <span className={`flex-1 text-left font-medium text-sm`}>{label}</span>
    {hasSubmenu && <ChevronRight size={16} className={`text-gray-400 ${active ? 'rotate-90' : ''} transition-transform`} />}
    
    {active && (
      <motion.div 
        layoutId="sidebarLine"
        className="absolute left-0 w-1 h-6 bg-brand-purple rounded-r-full" 
      />
    )}
  </motion.button>
);

const ToolbarButton = ({ icon: Icon, label, glow = false }: any) => (
  <motion.button
    whileHover={{ y: -2, scale: 1.05 }}
    className={`p-3 rounded-xl glass-card transition-all flex flex-col items-center gap-1 group hover:border-brand-purple/50`}
  >
    <div className={`relative p-2 rounded-lg ${glow ? 'bg-brand-purple/10 text-brand-purple' : 'text-gray-500 group-hover:text-brand-purple'}`}>
      <Icon size={22} className="relative z-10" />
      {glow && <div className="absolute inset-0 bg-brand-purple/20 blur-md rounded-full" />}
    </div>
    <span className="text-[10px] font-semibold text-gray-400 group-hover:text-brand-purple/80 tracking-tight uppercase">
      {label}
    </span>
  </motion.button>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('首页');
  const [activeHeaderTab, setActiveHeaderTab] = useState('课程预览');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 12;

  const headerTabs = ['课程预览', '资源', '学生', '反馈'];

  return (
    <div className="flex h-screen w-full bg-slate-50/50 backdrop-blur-[2px] overflow-hidden font-sans">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-72 h-full glass-card border-r border-white/40 flex flex-col z-20"
      >
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center shadow-lg shadow-brand-purple/20">
            <Layers className="text-white" size={24} />
          </div>
          <div>
            <h1 className="font-bold text-xl tracking-tight text-gray-900 leading-tight">精英教育</h1>
            <p className="text-[10px] font-bold text-brand-purple uppercase tracking-[0.15em] opacity-70">企业级云端</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto pt-4">
          <div className="mb-8">
            <h2 className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">主菜单</h2>
            <div className="space-y-1">
              <SidebarItem icon={LayoutDashboard} label="首页" active={activeTab === '首页'} onClick={() => setActiveTab('首页')} />
              <SidebarItem icon={BookOpen} label="课程大纲" hasSubmenu active={activeTab === '课程大纲'} onClick={() => setActiveTab('课程大纲')} />
              <SidebarItem icon={Users} label="LMS 班级" active={activeTab === 'LMS 班级'} onClick={() => setActiveTab('LMS 班级')} />
              <SidebarItem icon={FileText} label="评估测试" active={activeTab === '评估测试'} onClick={() => setActiveTab('评估测试')} />
            </div>
          </div>

          <div>
            <h2 className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">教学中心</h2>
            <div className="space-y-1">
              <SidebarItem icon={Play} label="直播课堂" active={activeTab === '直播课堂'} onClick={() => setActiveTab('直播课堂')} />
              <SidebarItem icon={MessageCircle} label="沟通互动" active={activeTab === '沟通互动'} onClick={() => setActiveTab('沟通互动')} />
            </div>
          </div>
        </nav>

        <div className="p-4 mt-auto relative">
          <div className="glass-card p-4 rounded-xl border-brand-purple/10 bg-brand-purple/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center">
                <Plus className="text-brand-purple" size={18} />
              </div>
              <p className="text-xs font-semibold text-gray-700">快速计划</p>
            </div>
            <button className="w-full py-2 bg-brand-purple text-white rounded-lg text-sm font-semibold shadow-md shadow-brand-purple/20 hover:bg-brand-purple/90 transition-all">
              创建课时
            </button>
          </div>
          
          <div className="relative">
            <div 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="mt-4 flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/40 rounded-xl transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150')] bg-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">萨拉·约翰逊 博士</p>
                <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">资深教育专家</p>
              </div>
              <Settings size={18} className="text-gray-400 hover:text-brand-purple transition-colors" />
            </div>

            <AnimatePresence>
              {showUserMenu && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowUserMenu(false)}
                    className="fixed inset-0 z-40"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-4 mb-2 w-48 glass-card rounded-xl shadow-xl border-white/60 p-1.5 z-50 overflow-hidden"
                  >
                    <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-purple/5 hover:text-brand-purple rounded-lg transition-all flex items-center gap-3">
                      <Users size={16} />
                      切换账号
                    </button>
                    <div className="h-px bg-slate-100 my-1 mx-2" />
                    <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-all flex items-center gap-3">
                      <Play size={16} className="rotate-180" />
                      退出登录
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
        {/* Top Header */}
        <header className="h-20 flex items-center justify-between px-8 glass-card border-b border-white/40 bg-white/40">
          <div className="flex items-center gap-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="搜索资源、课程、学生..."
                className="pl-10 pr-4 py-2.5 w-80 bg-slate-100/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-all border border-transparent focus:border-brand-purple/30"
              />
            </div>
            
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-xl">
              {headerTabs.map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveHeaderTab(tab)}
                  className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-lg ${
                    activeHeaderTab === tab ? 'text-brand-purple shadow-sm' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {activeHeaderTab === tab && (
                    <motion.div 
                      layoutId="headerIndicator"
                      className="absolute inset-0 bg-white rounded-lg z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <Bell size={20} className="text-gray-500 cursor-pointer hover:text-brand-purple transition-colors" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </div>
            <div className="h-4 w-px bg-slate-200 mx-1" />
            <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-purple/10 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">正在直播</span>
            </div>
          </div>
        </header>

        {/* Central Display Area */}
        <div className="flex-1 p-8 flex flex-col gap-6 overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">量子计算入门</h2>
              <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <span className="text-brand-purple">12年级物理</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>第四单元：未来科技</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg hover:bg-white transition-all text-sm font-semibold text-gray-700">
                <Edit3 size={16} className="text-brand-purple" />
                编辑计划
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-brand-purple text-white font-bold rounded-lg shadow-lg shadow-brand-purple/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm">
                <Play size={16} fill="currentColor" />
                开始授课
              </button>
              <button className="p-2 glass-card rounded-lg text-gray-500 hover:text-brand-purple">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>

          {/* PPT/PDF Viewer Mockup - "Frame-less" Look */}
          <motion.div 
            layout
            className="flex-1 glass-card rounded-2xl overflow-hidden relative group border-white/50 shadow-xl shadow-slate-200/50 flex flex-col"
          >
            {/* Slide Header (Refined Controls) */}
            <div className="absolute top-0 left-0 right-0 h-16 px-6 flex items-center justify-between bg-gradient-to-b from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
              <div className="flex items-center gap-3 pointer-events-auto">
                <span className="text-xs font-bold text-gray-600 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                  第 {currentSlide} 页，共 {totalSlides} 页
                </span>
              </div>
              <div className="flex items-center gap-2 pointer-events-auto">
                 <button className="p-2 bg-white/90 rounded-lg shadow-sm border border-slate-100 text-gray-600 hover:text-brand-purple transition-colors">
                  <Maximize2 size={16} />
                </button>
                <button className="p-2 bg-white/90 rounded-lg shadow-sm border border-slate-100 text-gray-600 hover:text-brand-purple transition-colors">
                  <Share2 size={16} />
                </button>
              </div>
            </div>

            {/* Slide Content Mockup */}
            <div className="flex-1 bg-white relative flex items-center justify-center p-12 overflow-hidden select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.02, x: -20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="w-full max-w-4xl space-y-12"
                >
                  <div className="space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold rounded-full uppercase tracking-widest"
                    >
                      核心概念
                    </motion.div>
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-5xl font-black text-gray-900 tracking-tight leading-[1.1]"
                    >
                      理解 <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-indigo-500">量子叠加态</span>
                    </motion.h3>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 gap-10"
                  >
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                        <div className="w-6 h-6 border-2 border-brand-purple rounded-full border-t-transparent animate-spin" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-3">经典比特</h4>
                      <p className="text-sm leading-relaxed text-gray-500">在任何特定时刻，二进制状态被严格定义为 0 或 1。</p>
                    </div>
                    <div className="bg-brand-purple/5 p-8 rounded-2xl border border-brand-purple/10">
                      <div className="relative w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                        <div className="absolute inset-0 bg-brand-purple/20 blur-lg rounded-full" />
                        <div className="relative w-6 h-6 border-2 border-brand-purple rounded-full" />
                      </div>
                      <h4 className="font-bold text-lg text-brand-purple mb-3">量子比特 (Qubits)</h4>
                      <p className="text-sm leading-relaxed text-gray-600 font-medium">在进行测量之前，多种可能的状态同时并存。</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 skew-x-[-15deg] translate-x-20" />
            </div>

            {/* Slide Navigation Controls */}
            <div className="h-20 glass-card mx-8 mb-8 rounded-xl flex items-center justify-between px-6 border-white/60">
              <div className="flex items-center gap-4">
                <button 
                  disabled={currentSlide === 1}
                  onClick={() => setCurrentSlide(s => Math.max(1, s - 1))}
                  className="p-3 glass-card rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <ArrowLeft size={18} className="group-hover:text-brand-purple transition-colors" />
                </button>
                <div className="flex items-center gap-1.5 px-2">
                  {[...Array(totalSlides)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${i + 1 === currentSlide ? 'w-8 bg-brand-purple' : 'w-2 bg-slate-200'}`} 
                    />
                  ))}
                </div>
                <button 
                  disabled={currentSlide === totalSlides}
                  onClick={() => setCurrentSlide(s => Math.min(totalSlides, s + 1))}
                  className="p-3 glass-card rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <ArrowRight size={18} className="group-hover:text-brand-purple transition-colors" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-4 italic">讲义备注可用</span>
                <button className="px-4 py-2 text-xs font-bold bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">跳转到指定页</button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Right Floating Toolbar */}
      <motion.aside 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 py-4"
      >
        <ToolbarButton icon={Edit3} label="代码标注" />
        <ToolbarButton icon={Share2} label="屏幕投射" />
        <ToolbarButton icon={Users} label="课堂投票" glow />
        <ToolbarButton icon={MessageCircle} label="实时聊天" />
        <ToolbarButton icon={Layers} label="教学辅助" />
        <div className="h-px w-8 bg-slate-200 mx-auto my-2" />
        <ToolbarButton icon={MoreHorizontal} label="更多菜单" />
      </motion.aside>

      {/* Aesthetic Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />
    </div>
  );
}
