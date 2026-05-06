## Web site Domain: ➡️
https://nekruzcse.github.io/Portfolio/

# Nekruz Jumanazarov — Portfolio

## EmailJS sozlash (Contact Form)

Contact formani to'liq ishlatish uchun EmailJS ni sozlash kerak (bepul).

### Qadamlar:

1. **Ro'yxatdan o'ting:** https://www.emailjs.com/ — bepul hisob oching

2. **Email Service qo'shing:**
   - Dashboard → Email Services → Add New Service
   - Gmail ni tanlang va hisobingizni ulang
   - Service ID ni copy qiling (masalan: `service_abc123`)

3. **Template yarating:**
   - Dashboard → Email Templates → Create New Template
   - Template ichida quyidagi o'zgaruvchilarni ishlating:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     Phone: {{phone}}

     Message:
     {{message}}
     ```
   - Template ID ni copy qiling (masalan: `template_xyz456`)

4. **Public Key oling:**
   - Dashboard → Account → General → Public Key

5. **index.js faylini oching va quyidagilarni almashtiring:**
   ```js
   emailjs.init('YOUR_PUBLIC_KEY');         // Public Key
   emailjs.send('YOUR_SERVICE_ID', ...)     // Service ID
   emailjs.send(..., 'YOUR_TEMPLATE_ID', )  // Template ID
   ```

### Tayyor!
Endi Contact formadan xabar yuborilganda nekruzweb06@gmail.com ga xabar keladi.

---
Portfolio by Nekruz Jumanazarov
