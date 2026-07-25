"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Monitor, Gamepad2, GraduationCap, ArrowUpRight, CheckCircle2, Briefcase, BookOpen } from "lucide-react";

type DegreeType = "all" | "bachelor" | "master";

interface ProgramItem {
  id: string;
  degreeType: "bachelor" | "master";
  degreeName: string;
  majorName: string;
  trackName: string;
  icon: any;
  badgeColor: string;
  description: string;
  highlights: string[];
  careers: string[];
}

export default function ProgramExplorer() {
  const [filter, setFilter] = useState<DegreeType>("all");
  const [activeTab, setActiveTab] = useState<string>("all");

  const programs: ProgramItem[] = [
    {
      id: "cs-software",
      degreeType: "bachelor",
      degreeName: "วิทยาศาสตรบัณฑิต (วท.บ.)",
      majorName: "สาขาวิชาวิทยาการคอมพิวเตอร์",
      trackName: "แขนงวิทยาการซอฟต์แวร์ (Software Science)",
      icon: Code,
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "มุ่งเน้นการพัฒนานักซอฟต์แวร์ระดับมืออาชีพ ครอบคลุมการออกแบบสถาปัตยกรรมซอฟต์แวร์ เว็บแอปพลิเคชัน โมบายแอป และระบบคลาวด์",
      highlights: ["การเขียนโปรแกรมเชิงวัตถุ & Clean Code", "การพัฒนา Mobile & Full-Stack Application", "Software Testing & DevOps Framework"],
      careers: ["Software Engineer / Developer", "Web & Mobile Application Developer", "DevOps & Cloud Engineer", "System Analyst"],
    },
    {
      id: "cs-data",
      degreeType: "bachelor",
      degreeName: "วิทยาศาสตรบัณฑิต (วท.บ.)",
      majorName: "สาขาวิชาวิทยาการคอมพิวเตอร์",
      trackName: "แขนงวิทยาการข้อมูลและสารสนเทศ (Data Science)",
      icon: Database,
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      description: "เน้นการวิเคราะห์ข้อมูลขนาดใหญ่ (Big Data) การประมวลผลข้อมูลอัจฉริยะ และการพัฒนาโมเดลปัญญาประดิษฐ์ (AI / Machine Learning)",
      highlights: ["การจัดการ Big Data & Database Systems", "Machine Learning & AI Modeling", "Business Intelligence & Data Visualization"],
      careers: ["Data Scientist / Data Analyst", "AI & Machine Learning Developer", "Data Engineer", "Business Intelligence Specialist"],
    },
    {
      id: "it-office",
      degreeType: "bachelor",
      degreeName: "วิทยาศาสตรบัณฑิต (วท.บ.)",
      majorName: "สาขาวิชาเทคโนโลยีสารสนเทศ",
      trackName: "แขนงเทคโนโลยีสำนักงานดิจิทัล (Digital Office Technology)",
      icon: Monitor,
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      description: "มุ่งประยุกต์ใช้เทคโนโลยีดิจิทัลในการบริหารและเปลี่ยนผ่านกระบวนการทำงานในองค์กร (Digital Transformation) อย่างทรงประสิทธิภาพ",
      highlights: ["ระบบสำนักงานอัตโนมัติ (Digital Automation)", "การบริหารจัดการโครงสร้างไอทีองค์กร", "Cybersecurity & Digital Governance"],
      careers: ["Digital Office Specialist", "IT Administrator / Coordinator", "Digital Transformation Consultant", "Information System Executive"],
    },
    {
      id: "it-games",
      degreeType: "bachelor",
      degreeName: "วิทยาศาสตรบัณฑิต (วท.บ.)",
      majorName: "สาขาวิชาเทคโนโลยีสารสนเทศ",
      trackName: "แขนงดิจิทัลคอนเทนต์และเกม (Digital Content & Games)",
      icon: Gamepad2,
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      description: "เน้นการผลิตสื่อดิจิทัลสร้างสรรค์ ออกแบบเกม 2D/3D คอนเทนต์มัลติมีเดีย และระบบปฏิสัมพันธ์แบบ Interactive",
      highlights: ["Game Design & Development (Unity/Unreal)", "3D Computer Graphics & Animation", "UI/UX & Interactive Media Design"],
      careers: ["Game Developer / Programmer", "3D Modeler & Animator", "UI/UX Designer for Games/Media", "Digital Content Creator"],
    },
    {
      id: "edu-comp",
      degreeType: "bachelor",
      degreeName: "ครุศาสตรบัณฑิต (ค.บ.)",
      majorName: "สาขาวิชาคอมพิวเตอร์",
      trackName: "หลักสูตรครุศาสตรบัณฑิต คอมพิวเตอร์",
      icon: GraduationCap,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "ผลิตบัณฑิตครูคอมพิวเตอร์ที่มีอัตลักษณ์และสมรรถนะเป็นเลิศ ชำนาญการสอน นวัตกรรมการศึกษา และพร้อมเป็นผู้ประกอบการด้านการศึกษา",
      highlights: ["จิตวิทยาและการจัดการเรียนรู้ยุคดิจิทัล", "นวัตกรรมและเทคโนโลยีเพื่อการศึกษา (EdTech)", "การฝึกประสบการณ์วิชาชีพครูในสถานศึกษา"],
      careers: ["ครูผู้สอนวิชาคอมพิวเตอร์ / เทคโนโลยี", "บุคลากรทางการศึกษาสายเทคโนโลยี", "นักออกแบบและพัฒนานวัตกรรมการเรียนรู้", "ผู้ประกอบการด้าน EdTech"],
    },
    {
      id: "master-cs",
      degreeType: "master",
      degreeName: "วิทยาศาสตรมหาบัณฑิต (วท.ม.)",
      majorName: "สาขาวิชาวิทยาการคอมพิวเตอร์และเทคโนโลยี",
      trackName: "หลักสูตรปริญญาโท (วท.ม.)",
      icon: BookOpen,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "พัฒนาองค์ความรู้ระดับสูง สร้างสรรค์งานวิจัยและนวัตกรรมทางด้านเทคโนโลยีดิจิทัลที่ได้รับการยอมรับในระดับสากล",
      highlights: ["งานวิจัยนวัตกรรมดิจิทัลเพื่อพัฒนาท้องถิ่น", "สถาปัตยกรรมคอมพิวเตอร์และระบบขั้นสูง", "การตีพิมพ์ผลงานวิชาการระดับสากล"],
      careers: ["นักวิจัย / ผู้เชี่ยวชาญด้านเทคโนโลยีดิจิทัล", "อาจารย์มหาวิทยาลัย / สถาบันการศึกษา", "ที่ปรึกษาด้านเทคโนโลยีและนวัตกรรมองค์กร"],
    },
  ];

  const filteredPrograms = programs.filter((p) => {
    if (filter === "bachelor") return p.degreeType === "bachelor";
    if (filter === "master") return p.degreeType === "master";
    return true;
  });

  return (
    <section id="programs" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            Academic Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            หลักสูตรที่เปิดสอน คณะเทคโนโลยีสารสนเทศ
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            ออกแบบหลักสูตรตามมาตรฐานวิชาชีพ มุ่งเน้นการลงมือปฏิบัติจริง 
            เพื่อเตรียมความพร้อมสู่สายงานเทคโนโลยีดิจิทัลยุคใหม่
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200 gap-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "all"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ทั้งหมด ({programs.length})
            </button>
            <button
              onClick={() => setFilter("bachelor")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "bachelor"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ปริญญาตรี (5 แขนง)
            </button>
            <button
              onClick={() => setFilter("master")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "master"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ปริญญาโท (1 สาขา)
            </button>
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((prog) => {
              const IconComponent = prog.icon;
              return (
                <motion.div
                  key={prog.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header Degree Label & Icon */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${prog.badgeColor}`}>
                        {prog.degreeName}
                      </span>
                    </div>

                    {/* Major & Track Titles */}
                    <div>
                      <div className="text-xs font-medium text-slate-500">{prog.majorName}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 leading-snug group-hover:text-blue-600 transition-colors">
                        {prog.trackName}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {prog.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-2 space-y-2 border-t border-slate-100">
                      <div className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        จุดเด่นรายวิชา & ทักษะ
                      </div>
                      <ul className="space-y-1.5">
                        {prog.highlights.map((hl, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Careers */}
                    <div className="pt-2 space-y-2 border-t border-slate-100">
                      <div className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                        แนวทางการประกอบอาชีพ
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {prog.careers.map((c, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href="#lead-form"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-blue-700 bg-blue-50/70 hover:bg-blue-600 hover:text-white transition-all group-hover:bg-blue-600 group-hover:text-white"
                    >
                      สนใจสมัครเรียนสาขานี้
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
