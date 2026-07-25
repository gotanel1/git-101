"use client";

import { useState } from "react";
import { Calendar, CreditCard, CheckCircle, HelpCircle, ArrowRight, ExternalLink } from "lucide-react";

export default function TcasAndFees() {
  const tcasRounds = [
    {
      round: "Round 1",
      name: "Portfolio",
      sub: "แฟ้มสะสมผลงาน",
      period: "พฤศจิกายน - มกราคม",
      desc: "ยื่นผลงาน เกรดเฉลี่ย (GPAX) กิจกรรม และเกียรติบัตรด้านเทคโนโลยี/คอมพิวเตอร์",
      badge: "เน้นผลงาน",
    },
    {
      round: "Round 2",
      name: "Quota",
      sub: "โควตาพื้นที่ & เครือข่าย",
      period: "กุมภาพันธ์ - มีนาคม",
      desc: "สำหรับนักเรียนในเขตพื้นที่เพชรบุรี ประจวบคีรีขันธ์ และโรงเรียนพันธมิตร",
      badge: "โควตาท้องถิ่น",
    },
    {
      round: "Round 3",
      name: "Admission",
      sub: "รับตรงผ่านระบบกลาง",
      period: "เมษายน - พฤษภาคม",
      desc: "คัดเลือกผ่านระบบ myTCAS ใช้คะแนน TGAT/TPAT และ GPAX",
      badge: "ระบบกลาง",
    },
    {
      round: "Round 4",
      name: "Direct Admission",
      sub: "รับตรงอิสระ",
      period: "พฤษภาคม - มิถุนายน",
      desc: "เปิดรับสมัครตรงผ่านมหาวิทยาลัยราชภัฏเพชรบุรี (หากยังมีที่นั่งว่าง)",
      badge: "รับตรง มรภ.",
    },
  ];

  const feeDetails = [
    {
      level: "ปริญญาตรี (วท.บ. & ค.บ.)",
      program: "วิทยาการคอมพิวเตอร์ / เทคโนโลยีสารสนเทศ / คอมพิวเตอร์",
      estFee: "~ 11,000 - 13,000 บาท",
      unit: "ต่อภาคการศึกษา",
      benefits: ["ผ่อนชำระค่าธรรมเนียมได้", "รองรับทุนกู้ยืม กยศ. / กรอ.", "ใช้งานซอฟต์แวร์ลิขสิทธิ์ฟรี"],
    },
    {
      level: "ปริญญาโท (วท.ม.)",
      program: "วิทยาการคอมพิวเตอร์และเทคโนโลยี",
      estFee: "~ 22,000 - 25,000 บาท",
      unit: "ต่อภาคการศึกษา",
      benefits: ["มีทุนสนับสนุนงานวิชาการ", "เรียนวันเสาร์-อาทิตย์", "สิทธิ์เข้าถึงห้องปฏิบัติการวิจัย"],
    },
  ];

  return (
    <section id="tcas-fees" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            Admission & Fees
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            รอบการรับสมัคร TCAS และประมาณการค่าธรรมเนียมการศึกษา
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            โปร่งใส ตรวจสอบได้ พร้อมทุนการศึกษาและการสนับสนุนการเรียนรู้อย่างครอบคลุม
          </p>
        </div>

        {/* TCAS Rounds */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              กำหนดการรับสมัคร TCAS 67-69
            </h3>
            <a
              href="https://www.pbru.ac.th/pbru/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              ดูประกาศมหาวิทยาลัยเพิ่มเติม
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tcasRounds.map((r, i) => (
              <div
                key={r.round}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">
                      {r.round}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[11px] font-medium">
                      {r.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{r.name}</h4>
                  <p className="text-xs font-medium text-blue-700">{r.sub}</p>
                  <p className="text-xs text-slate-500 font-semibold pt-1">ช่วงเวลา: {r.period}</p>
                  <p className="text-xs text-slate-600 pt-2 leading-relaxed">{r.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <a
                    href="#lead-form"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    ลงทะเบียนสนใจรอบนี้
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tuition Fees Breakdown Section */}
        <div className="mt-16 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">ประมาณการค่าธรรมเนียมการศึกษา</h3>
              <p className="text-xs text-slate-500">อัตราค่าธรรมเนียมตามประกาศมหาวิทยาลัยราชภัฏเพชรบุรี</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {feeDetails.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      {f.level}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-2">{f.program}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-700">{f.estFee}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{f.unit}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-semibold text-slate-700">สิทธิประโยชน์และการสนับสนุน:</div>
                  <ul className="space-y-1.5">
                    {f.benefits.map((b, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Note */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">หมายเหตุ:</strong> ค่าธรรมเนียมการศึกษาอาจมีการเปลี่ยนแปลงตามประกาศระเบียบมหาวิทยาลัยในแต่ละปีการศึกษา 
              นักศึกษาสามารถยื่นขอทุนการศึกษาของมหาวิทยาลัย หรือยื่นกู้ยืมเงินเพื่อการศึกษา (กยศ. / กรอ.) ได้ตามเงื่อนไข
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
