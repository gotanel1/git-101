import { GraduationCap, Mail, PhoneCall, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-white leading-tight text-lg">IT PBRU</div>
                <div className="text-xs text-slate-400">คณะเทคโนโลยีสารสนเทศ มรภ.เพชรบุรี</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              มุ่งมั่นสร้างสรรค์นวัตกรรมดิจิทัล บ่มเพาะบัณฑิตผู้มีความรู้ คู่คุณธรรม 
              เพื่อเป็นกำลังสำคัญในการพัฒนาท้องถิ่นและประเทศชาติอย่างยั่งยืน
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/PBRUIT/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:itpbru@mail.pbru.ac.th"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:032708617"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">ลิงก์ด่วนในหน้าเว็บ</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">หน้าแรก (Home)</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-blue-400 transition-colors">หลักสูตรปริญญาตรี & โท</a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-blue-400 transition-colors">จุดเด่น & อัตลักษณ์นักศึกษา</a>
              </li>
              <li>
                <a href="#tcas-fees" className="hover:text-blue-400 transition-colors">รอบรับสมัคร TCAS & ค่าเทอม</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">ลงทะเบียนสนใจศึกษาต่อ</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Programs Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">สาขาและแขนงวิชา</h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-400 font-medium">วท.บ. วิทยาการคอมพิวเตอร์</li>
              <li className="text-slate-400 font-medium">วท.บ. เทคโนโลยีสารสนเทศ</li>
              <li className="text-slate-400 font-medium">ค.บ. คอมพิวเตอร์</li>
              <li className="text-slate-400 font-medium">วท.ม. วิทยาการคอมฯ (ป.โท)</li>
            </ul>
          </div>

          {/* Col 5: University Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">มหาวิทยาลัยราชภัฏเพชรบุรี</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.pbru.ac.th/pbru/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  เว็บไซต์หลัก มรภ.เพชรบุรี
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="http://lms.pbru.ac.th/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  ระบบ PBRU LMS
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pbru.ac.th/GreenU"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  GREEN PBRU
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Faculty of Information Technology, Phetchaburi Rajabhat University. All rights reserved.</p>
          <p className="text-[11px]">พัฒนาด้วย Next.js 16 & Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  );
}
