# สรุปรายงานและคำตอบท้ายปฏิบัติการ (Lab Report & Answers)

**วิชา:** Web Development / CI-CD Lab  
**หัวข้อ:** LAB: GitHub Actions + GitHub Pages  
**ชื่อ-นามสกุล:** ภคพล ฤทธิ์กันโต (Pakaraphon Ritkanto)  
**รหัสนิสิต:** 67160360  
**GitHub Repository:** [https://github.com/67160360-AI/webdev-actions-lab](https://github.com/67160360-AI/webdev-actions-lab)  
**GitHub Pages URL:** [https://67160360-AI.github.io/webdev-actions-lab/](https://67160360-AI.github.io/webdev-actions-lab/)  

---

## สรุปการทำแบบฝึกหัด (Exercises)

### Exercise 1 (พื้นฐาน)
- ปรับเปลี่ยนข้อมูลใน `index.html` ให้แสดงชื่อ **ภคพล ฤทธิ์กันโต (Pakaraphon Ritkanto)** และรหัสนิสิต **67160360** พร้อมข้อความต้อนรับและสถานะที่พร้อมสำหรับการ Deploy

### Exercise 2 (UI)
- ออกแบบหน้าเว็บด้วยดีไซน์ Card และ Grid ที่ทันสมัย แบ่งออกเป็น 3 ส่วนหลักตามเกณฑ์:
  1. **About Me:** ข้อมูลแนะนำตัว การศึกษา และเป้าหมายการเรียนรู้
  2. **Skills:** ทักษะทางเทคโนโลยี (HTML5, CSS3, JavaScript, Git & GitHub, GitHub Actions, GitHub Pages)
  3. **Contact:** ช่องทางการติดต่อ อีเมล (`67160360@go.buu.ac.th`), GitHub Profile และลิงก์ไปยัง Repository

### Exercise 3 (JavaScript)
- พัฒนาฟังก์ชันแบบโต้ตอบ (Interactive):
  - ปุ่ม **Say Hello 👋**: เมื่อกดจะเปลี่ยนข้อความสถานะต้อนรับ
  - ปุ่ม **Toggle Theme 🌙 / ☀️**: สลับโหมดการแสดงผล Light Theme และ Dark Theme แบบไดนามิก พร้อมเปลี่ยนข้อความและไอคอนบนปุ่ม

### Exercise 4 (Automation)
- **อธิบายการทำงานของ Workflow:**
  - **การเริ่มทำงาน (Trigger):** Workflow จะเริ่มต้นทำงานโดยอัตโนมัติเมื่อเกิดเหตุการณ์ `push` ส่งโค้ดขึ้นไปยัง Branch `main` หรือเมื่อผู้ใช้กดสั่งรันเองผ่านปุ่ม `workflow_dispatch` บนหน้าเว็บ GitHub Actions
  - **หน้าที่ของ Job `deploy`:**
    1. ทำการ Checkout โค้ดล่าสุดจาก Repository ลงใน Ubuntu Runner (`actions/checkout@v6`)
    2. ทำการตรวจสอบว่ามีไฟล์ `index.html` อยู่จริงหรือไม่ (`test -f index.html`)
    3. กำหนดค่าสภาพแวดล้อมสำหรับ GitHub Pages (`actions/configure-pages@v5`)
    4. แพ็กและอัปโหลดไฟล์ Static Web เป็น Artifact สำหรับการเผยแพร่ (`actions/upload-pages-artifact@v4`)
    5. ส่งมอบและขึ้นระบบ (Deploy) สู่ GitHub Pages พร้อมคืนค่า URL เว็บไซต์ (`actions/deploy-pages@v4`)

### Challenge (เพิ่มเติม)
- มีการเพิ่ม Step สำหรับตรวจสอบไฟล์ `index.html` ก่อนทำการ Deploy ใน `.github/workflows/deploy.yml`:
  ```yaml
  - name: Verify index.html exists (Challenge)
    run: test -f index.html
  ```

---

## เฉลยคำถามท้ายแลป (Lab Questions & Answers)

### 1) GitHub Actions แตกต่างจาก GitHub Pages อย่างไร?
- **GitHub Actions:** เป็นแพลตฟอร์มระบบอัตโนมัติแบบ **CI/CD (Continuous Integration / Continuous Delivery)** ที่ใช้สั่งรันคำสั่ง ตรวจสอบ ทดสอบ หรือบิลด์โค้ดตามเหตุการณ์ (Event) ที่กำหนด เช่น เมื่อมีการ `push` หรือสร้าง `pull request`
- **GitHub Pages:** เป็นบริการ **Web Hosting แบบ Static** ที่นำไฟล์ HTML, CSS, JavaScript และ Assets ไปเปิดให้บริการเป็นเว็บไซต์สาธารณะผ่าน URL อินเทอร์เน็ต
- **ความสัมพันธ์:** GitHub Actions ทำหน้าที่เป็นตัวกลางในการส่งต่อ (Deploy) ไฟล์เว็บไซต์ขึ้นไปเผยแพร่บน GitHub Pages โดยอัตโนมัติ

---

### 2) เหตุใดจึงเลือก trigger ด้วย push ที่ branch main?
- เนื่องจาก branch **`main`** ถือเป็นสาขาหลัก (Production Branch) ที่เก็บโค้ดเวอร์ชันที่ผ่านการทดสอบและพร้อมใช้งานจริง การตั้งค่าให้ Trigger เฉพาะเมื่อมีการ push เข้า branch main จะช่วยป้องกันไม่ให้โค้ดที่ยังพัฒนาไม่เสร็จใน branch อื่นๆ ถูกนำไป deploy สู่หน้าเว็บจริงโดยไม่ตั้งใจ และทำให้หน้าเว็บจริงอัปเดตทันทีที่มีการรวมโค้ดที่สมบูรณ์เข้าสู่ main

---

### 3) ถ้าแก้ไฟล์ในเครื่องแต่ไม่ได้ push เว็บไซต์จะเปลี่ยนหรือไม่ เพราะเหตุใด?
- **ไม่เปลี่ยน** เพราะการแก้ไขไฟล์ในเครื่อง (Local) ส่งผลเฉพาะในเครื่องคอมพิวเตอร์ของเราเท่านั้น GitHub Actions จะทำงานก็ต่อเมื่อมีการส่งโค้ดผ่านคำสั่ง `git push` ไปยัง Remote Repository บน GitHub หากไม่มีการ push ขึ้นไป GitHub ก็จะไม่รับรู้การเปลี่ยนแปลงและไม่มี Event ไปกระตุ้นให้ Workflow เริ่มทำงาน

---

### 4) เหตุใดโปรเจกต์ PHP + MySQL จึงไม่สามารถนำไปรันบน GitHub Pages ได้โดยตรง?
- เนื่องจาก GitHub Pages ให้บริการเฉพาะ **Static Web Hosting** (ประมวลผลฝั่ง Client-side ด้วย HTML, CSS, JS เท่านั้น)
- GitHub Pages **ไม่มี Server-side Runtime (PHP Engine)** สำหรับประมวลผลโค้ดภาษา PHP และ **ไม่มี Database Server (MySQL)** สำหรับเชื่อมต่อและจัดเก็บข้อมูล หากต้องการรันระบบ PHP + MySQL จะต้องใช้ Web Server หรือ Cloud Hosting ที่รองรับ เช่น Apache/Nginx + PHP-FPM และ MySQL Database จริง

---

### 5) อธิบายขั้นตอนการค้นหาสาเหตุ เมื่อ Workflow มีสถานะ Failed
1. เข้าไปที่หน้า Repository บน GitHub แล้วคลิกแท็บ **Actions**
2. เลือกรายการ Workflow Run ที่แสดงสัญลักษณ์กากบาทสีแดง (Failed)
3. คลิกเข้าไปที่ชื่อ Job (เช่น `deploy`) ที่ล้มเหลว
4. ตรวจสอบขั้นตอน (Step) ที่มีสัญลักษณ์สีแดง เพื่อดูว่าเป็นขั้นตอนใด เช่น `Setup Pages`, `Verify index.html exists` หรือ `Upload static website`
5. คลิกขยายดู **Logs รายละเอียดข้อผิดพลาด (Error Message)** ในขั้นตอนนี้ เพื่ออ่านสาเหตุที่แท้จริง
6. ตรวจสอบการตั้งค่าที่เกี่ยวข้อง เช่น การอนุญาตสิทธิ์ (Settings → Pages → Source ต้องเป็น GitHub Actions) หรือตรวจสอบ syntax ในไฟล์ YAML
