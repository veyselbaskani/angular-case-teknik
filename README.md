# 👤 Angular Kullanıcı Detay Uygulaması

Bu proje, [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) üzerindeki sahte kullanıcı verilerini listeleyen ve her bir kullanıcı için detay sayfası sunan bir Angular uygulamasıdır.

## 🚀 Proje Özellikleri

### 🏠 Ana Sayfa (`/`)

- Tüm kullanıcılar listelenir.
- Her kullanıcı, kart görünümünde aşağıdaki bilgileri içerir:
  - İsim
  - E-posta
  - Şehir
  - Şirket Adı
- Kartlar tıklanabilir yapıdadır ve detay sayfasına yönlendirir.
- İsim bazlı arama ile filtreleme yapılabilir.
- Yükleniyor göstergesi: veri çekilirken `spinner` gösterilir.

### 🔎 Detay Sayfası (`/users/:id`)

- Aşağıdaki kullanıcı bilgileri detaylı gösterilir:
  - İsim
  - Kullanıcı Adı
  - E-posta
  - Telefon
  - Web Sitesi
  - Adres (tam)
  - Şirket Adı
  - Şirket Sloganı
- Geri Dön butonu ile ana sayfaya dönüş yapılabilir.
- Sayfa yüklenirken loading spinner gösterilir.
- Performans için veri route state üzerinden taşınır, fallback olarak API çağrısı yapılır.

---

## 🧰 Kullanılan Teknolojiler

- Angular 17+
- PrimeNG (Sakai-ng teması)
- RxJS
- TypeScript
- JSONPlaceholder API

---

## 📦 Kurulum

```bash
https://github.com/veyselbaskani/angular-case-teknik.git
cd angular-case-teknik
npm install
ng serve
```
