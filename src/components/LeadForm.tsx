"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, Clock, Sparkles } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    educationLevel: "ม.6 / ปวช.",
    interestedMajor: "วิทยาการคอมพิวเตอร์ (แขนงวิทยาการซอฟต์แวร์)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Network Request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Contact & Inquiry
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                สนใจศึกษาต่อ หรือสอบถามข้อมูลเพิ่มเติม
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                กรอกข้อมูลเพื่อให้พี่ๆ และอาจารย์ประจำหลักสูตรติดต่อกลับแนะนำแนวทางการเรียน 
                หรือแวะมาเยี่ยมชมคณะเทคโนโลยีสารสนเทศ มรภ.เพชรบุรี ได้ตลอดเวลาทำการ
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">สถานที่ตั้งคณะ</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี<br />
                    38 หมู่ 8 ถ.หาดเจ้าสำราญ ต.นาวุ้ง อ.เมือง จ.เพชรบุรี 76000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">เบอร์โทรศัพท์ติดต่อ</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    032-708617 (สำนักงานคณบดี คณะเทคโนโลยีสารสนเทศ)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">อีเมล & เว็บไซต์หลัก</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    อีเมล: <a href="mailto:itpbru@mail.pbru.ac.th" className="text-blue-600 underline">itpbru@mail.pbru.ac.th</a><br />
                    เว็บไซต์: <a href="http://www.it.pbru.ac.th" target="_blank" rel="noreferrer" className="text-blue-600 underline">http://www.it.pbru.ac.th</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">เวลาทำการ</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    วันจันทร์ - วันศุกร์ (08:30 น. - 16:30 น.)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed Preview */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-52">
              <iframe
                title="PBRU IT Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472846.2824459714!2d99.36828788906253!3d13.07332160000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30fd214d0f40471b%3A0xe3443123c5b7b1bd!2z4LiE4LiT4Liw4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Liq4Liy4Lij4Liq4LiZ4LmA4LiX4Lio!5e1!3m2!1sth!2sus!4v1767865136206!5m2!1sth!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div id="lead-form" className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">บันทึกข้อมูลเรียบร้อยแล้ว!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  ขอบคุณที่สนใจศึกษาต่อคณะเทคโนโลยีสารสนเทศ มรภ.เพชรบุรี เจ้าหน้าที่ของเราจะติดต่อกลับทางเบอร์โทรศัพท์หรืออีเมลโดยเร็วที่สุด
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors mt-4"
                >
                  ส่งข้อมูลสอบถามเพิ่มอีกรายการ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">ลงทะเบียนแสดงความสนใจเข้าศึกษา</h3>
                  <p className="text-xs text-slate-500 mt-1">กรอกข้อมูลสั้นๆ เพื่อรับข่าวสารรอบสมัครและแนวทางการเรียน</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      ชื่อ - นามสกุล <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="นาย/นางสาว สมชาย ใจดี"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      เบอร์โทรศัพท์ติดต่อ <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="081-234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      อีเมล (Email)
                    </label>
                    <input
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      ระดับการศึกษาปัจจุบัน
                    </label>
                    <select
                      value={formData.educationLevel}
                      onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
                    >
                      <option value="ม.6 / ปวช.">ม.6 / ปวช.</option>
                      <option value="ปวส.">ปวส.</option>
                      <option value="ปริญญาตรี (สนใจ ป.โท)">ปริญญาตรี (สนใจ ป.โท)</option>
                      <option value="ผู้ปกครอง / บุคคลทั่วไป">ผู้ปกครอง / บุคคลทั่วไป</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    สาขา / แขนงวิชาที่สนใจเป็นพิเศษ
                  </label>
                  <select
                    value={formData.interestedMajor}
                    onChange={(e) => setFormData({ ...formData, interestedMajor: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
                  >
                    <option value="วิทยาการคอมพิวเตอร์ (แขนงวิทยาการซอฟต์แวร์)">วท.บ. วิทยาการคอมพิวเตอร์ - แขนงวิทยาการซอฟต์แวร์</option>
                    <option value="วิทยาการคอมพิวเตอร์ (แขนงวิทยาการข้อมูลและสารสนเทศ)">วท.บ. วิทยาการคอมพิวเตอร์ - แขนงวิทยาการข้อมูล (Data Science)</option>
                    <option value="เทคโนโลยีสารสนเทศ (แขนงเทคโนโลยีสำนักงานดิจิทัล)">วท.บ. เทคโนโลยีสารสนเทศ - แขนงเทคโนโลยีสำนักงานดิจิทัล</option>
                    <option value="เทคโนโลยีสารสนเทศ (แขนงดิจิทัลคอนเทนต์และเกม)">วท.บ. เทคโนโลยีสารสนเทศ - แขนงดิจิทัลคอนเทนต์และเกม</option>
                    <option value="ครุศาสตรบัณฑิต (ค.บ. คอมพิวเตอร์)">ค.บ. คอมพิวเตอร์ (ครูคอมพิวเตอร์)</option>
                    <option value="ปริญญาโท (วท.ม. วิทยาการคอมพิวเตอร์และเทคโนโลยี)">วท.ม. วิทยาการคอมพิวเตอร์และเทคโนโลยี (ป.โท)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    ข้อสอบถามเพิ่มเติม (ถ้ามี)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="สอบถามข้อมูลทุนการศึกษา, รอบการรับสมัคร, หอพัก หรือการเดินทาง..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 rounded-2xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    "กำลังบันทึกข้อมูล..."
                  ) : (
                    <>
                      ส่งข้อมูลลงทะเบียนสนใจศึกษา
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
