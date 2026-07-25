"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Brain, HeartHandshake, Leaf, Cpu, Award, Globe } from "lucide-react";

export default function FacultyHighlights() {
  const pillars = [
    {
      title: "ซื่อสัตย์",
      desc: "ซื่อตรง ไม่คิดโกง มีจริยธรรมในวิชาชีพเทคโนโลยีดิจิทัล",
      icon: Shield,
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "มีวินัย",
      desc: "ตรงต่อเวลา มีความรับผิดชอบ และเคารพกฎระเบียบของสังคม",
      icon: Clock,
      color: "from-sky-500 to-blue-600",
    },
    {
      title: "ใฝ่เรียนรู้",
      desc: "มุ่งมั่นศึกษา พัฒนาตนเองและทักษะเทคโนโลยีอย่างต่อเนื่อง",
      icon: Brain,
      color: "from-indigo-600 to-blue-600",
    },
    {
      title: "คู่จิตอาสาธารณะ",
      desc: "มีจิตสำนึกต่อส่วนรวม พร้อมช่วยเหลือสังคมโดยไม่หวังผลตอบแทน",
      icon: HeartHandshake,
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const outcomes = [
    {
      title: "1. คุณธรรม & จริยธรรมวิชาชีพ",
      desc: "ยึดมั่นในจรรยาบรรณวิชาชีพเทคโนโลยีดิจิทัลและความรับผิดชอบต่อสังคม",
      icon: Award,
    },
    {
      title: "2. ความเชี่ยวชาญระดับมืออาชีพ",
      desc: "รอบรู้ ทันสมัย และปฏิบัติจริงในเทคโนโลยีดิจิทัลยุคใหม่",
      icon: Cpu,
    },
    {
      title: "3. คิดเป็น ทำเป็น อย่างมีวิจารณญาณ",
      desc: "วิเคราะห์ แก้ปัญหา และสร้างสรรค์นวัตกรรมได้อย่างเป็นระบบ",
      icon: Globe,
    },
    {
      title: "4. นวัตกรรมเพื่อสังคม (BCG Model)",
      desc: "สร้างสรรค์นวัตกรรมดิจิทัลเพื่อพัฒนาเศรษฐกิจฐานรากและชุมชนท้องถิ่นอย่างยั่งยืน",
      icon: Leaf,
    },
  ];

  return (
    <section id="highlights" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            Identity & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            อัตลักษณ์ และเอกลักษณ์ คณะเทคโนโลยีสารสนเทศ
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            เรามุ่งเน้นสร้างบัณฑิตที่ไม่เพียงเก่งเทคโนโลยี แต่ยังเปี่ยมด้วยคุณธรรม จริยธรรม 
            และพร้อมนำองค์ความรู้ไปพัฒนาชุมชนท้องถิ่นอย่างยั่งยืน
          </p>
        </div>

        {/* 4 Pillars of Student Identity */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">อัตลักษณ์ของนักศึกษา IT PBRU</h3>
            <p className="text-sm text-slate-500">“ซื่อสัตย์ มีวินัย ใฝ่เรียนรู้ คู่จิตอาสาธารณะ ก้าวสู่มืออาชีพ”</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pil, idx) => {
              const IconComp = pil.icon;
              return (
                <motion.div
                  key={pil.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-3 group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pil.color} text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {pil.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pil.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Faculty Identity & BCG Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                เอกลักษณ์คณะเทคโนโลยีสารสนเทศ
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                “เป็นคณะที่ผลิตนวัตกรรมทางด้านเทคโนโลยีดิจิทัล เพื่อพัฒนาชุมชนท้องถิ่นอย่างยั่งยืน ด้วยหลักปรัชญาเศรษฐกิจพอเพียง”
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                มุ่งเน้นคิดค้นนวัตกรรมดิจิทัลเพื่อแก้ปัญหาและเพิ่มศักยภาพให้กับชุมชนท้องถิ่นในเพชรบุรีและภูมิภาค 
                ควบคู่กับการประยุกต์ใช้โมเดลเศรษฐกิจ BCG (Bio-Circular-Green Economy)
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="text-xs font-medium text-blue-200">คุณลักษณะบัณฑิตพึงประสงค์</div>
              <div className="text-2xl font-bold text-white">4 ด้านหลัก</div>
              <p className="text-xs text-slate-300">
                บัณฑิตจบแล้วมีทักษะพร้อมลุยงานจริง สื่อสารเยี่ยม สภาพแวดล้อมการเรียนที่เน้นการลงมือปฏิบัติ (Practical Learning)
              </p>
            </div>
          </div>
        </div>

        {/* Desired Graduate Characteristics Grid */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {outcomes.map((out, i) => {
            const IconComponent = out.icon;
            return (
              <div
                key={out.title}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{out.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{out.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
