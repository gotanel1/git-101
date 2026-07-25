"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Database, ShieldCheck, Laptop, Award } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { label: "หลักสูตรปริญญาตรี", val: "5 แขนงวิชา", icon: Laptop },
    { label: "หลักสูตรปริญญาโท", val: "1 สาขาวิชา", icon: Code2 },
    { label: "ความชำนาญทางวิชาชีพ", val: "100% ปฏิบัติจริง", icon: Database },
    { label: "การส่งเสริมอาชีพ", val: "มืออาชีพ & ผู้ประกอบการ", icon: Award },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50">
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-400/20 via-sky-300/20 to-indigo-300/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text Content */}
          <motion.div
            className="lg:col-span-7 text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-medium shadow-xs">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>เปิดรับสมัครนักศึกษาใหม่ TCAS 67-69 | คณะเทคโนโลยีสารสนเทศ</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              ก้าวสู่มืออาชีพด้าน{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-sky-500 bg-clip-text text-transparent">
                เทคโนโลยีดิจิทัล
              </span>{" "}
              และนวัตกรรมเพื่ออนาคต
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี มุ่งเน้นสร้างบัณฑิตผู้มีความเชี่ยวชาญ 
              <strong className="font-semibold text-slate-800"> “ซื่อสัตย์ มีวินัย ใฝ่เรียนรู้ คู่จิตอาสาธารณะ” </strong> 
              พร้อมส่งเสริมการสร้างนวัตกรรมดิจิทัลเพื่อพัฒนาท้องถิ่นอย่างยั่งยืน
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#programs"
                className="px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                สำรวจหลักสูตรที่เปิดสอน
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#tcas-fees"
                className="px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-2xl transition-all shadow-xs"
              >
                ดูรอบรับสมัคร & ค่าเทอม
              </a>
            </div>

            {/* Badges / Trust points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>หลักสูตรได้มาตรฐานวิชาชีพ</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>ห้องปฏิบัติการคอมพิวเตอร์ทันสมัย</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Card Structure */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative bg-white/90 backdrop-blur-xl border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">คณะเทคโนโลยีสารสนเทศ</h3>
                    <p className="text-xs text-blue-600 font-semibold">Faculty of Information Technology (PBRU)</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-200">
                    ● เปิดรับสมัครแล้ว
                  </span>
                </div>

                {/* Slogan Banner Inside Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white space-y-2 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
                  <p className="text-xs font-medium text-blue-300">อัตลักษณ์ของนักศึกษา</p>
                  <p className="text-base font-semibold leading-relaxed text-blue-50">
                    “ซื่อสัตย์ มีวินัย ใฝ่เรียนรู้ คู่จิตอาสาธารณะ ก้าวสู่มืออาชีพ”
                  </p>
                </div>

                {/* Quick Highlights list inside card */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 font-medium">ระดับปริญญาตรี</p>
                    <p className="text-lg font-bold text-blue-600">วท.บ. & ค.บ.</p>
                    <p className="text-[11px] text-slate-500">รวม 5 แขนงวิชาเด่น</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 font-medium">ระดับปริญญาโท</p>
                    <p className="text-lg font-bold text-blue-600">วท.ม.</p>
                    <p className="text-[11px] text-slate-500">วิทยาการคอมฯ & เทคโนโลยี</p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="#lead-form"
                    className="block w-full py-3 px-4 text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                  >
                    กรอกข้อมูลให้เจ้าหน้าที่ติดต่อกลับ
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quick Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((st, i) => {
            const IconComp = st.icon;
            return (
              <motion.div
                key={st.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">{st.label}</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900">{st.val}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
