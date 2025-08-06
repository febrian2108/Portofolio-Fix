# End-to-End Testing dengan Playwright

## Deskripsi
Project ini menggunakan Playwright untuk melakukan end-to-end testing. Tests ini akan menguji semua fitur utama dari portfolio website termasuk navigasi, halaman skills, halaman projects, dan halaman detail project.

## Cara Menjalankan Tests

### 1. Install Dependencies
```bash
npm install
```

### 2. Menjalankan Tests

#### Menjalankan semua tests (headless mode)
```bash
npm test
```

#### Menjalankan tests dengan browser terlihat
```bash
npm run test:headed
```

#### Menjalankan tests dengan UI mode (interactive)
```bash
npm run test:ui
```

#### Menjalankan test tertentu
```bash
npx playwright test navigation.spec.js
npx playwright test projects.spec.js
npx playwright test skills.spec.js
npx playwright test project-detail.spec.js
```

#### Menjalankan tests di browser tertentu
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### 3. Melihat Test Report
Setelah tests selesai, buka report dengan:
```bash
npx playwright show-report
```

## Test Files

### 1. `navigation.spec.js`
- **Tujuan**: Menguji navigasi antar halaman
- **Test Cases**:
  - Navigasi ke semua halaman utama (Home, About, Skills, Projects)
  - Navigasi menggunakan logo
  - Navigasi mobile (responsive)

### 2. `skills.spec.js`
- **Tujuan**: Menguji halaman Skills
- **Test Cases**:
  - Menampilkan halaman skills dengan benar
  - Menampilkan kategori skills
  - Menampilkan icon dan deskripsi skills
  - Responsive design di mobile

### 3. `projects.spec.js`
- **Tujuan**: Menguji halaman Projects dan fitur filter
- **Test Cases**:
  - Menampilkan halaman projects dengan benar
  - Menampilkan tombol filter
  - Fungsi filter bekerja dengan benar (Web Development, Data Science, Mobile Development, AI/ML, Blockchain)
  - Navigasi ke halaman detail project
  - Menampilkan teknologi yang digunakan
  - Responsive design di mobile

### 4. `project-detail.spec.js`
- **Tujuan**: Menguji halaman detail project
- **Test Cases**:
  - Menampilkan halaman detail project dengan benar
  - Menampilkan section teknologi
  - Menampilkan gambar project
  - Link eksternal (GitHub, Demo) bekerja
  - Navigasi kembali ke halaman projects
  - Handle project ID yang tidak valid
  - Responsive design di mobile
  - Test multiple project detail pages

## Fitur yang Ditest

### ✅ Navigasi
- [x] Navigasi antar halaman utama
- [x] Logo navigation
- [x] Mobile navigation

### ✅ Halaman Skills
- [x] Display skills dengan kategori
- [x] Icon dan deskripsi skills
- [x] Responsive design

### ✅ Halaman Projects
- [x] Display projects
- [x] Filter functionality (bug yang diperbaiki)
- [x] Navigation ke detail page
- [x] Technology badges
- [x] Responsive design

### ✅ Halaman Project Detail
- [x] Display project information
- [x] Technology section
- [x] Image gallery
- [x] External links
- [x] Back navigation
- [x] Error handling
- [x] Responsive design

## Troubleshooting

### Jika tests gagal:

1. **Pastikan development server berjalan**:
   ```bash
   npm run dev
   ```

2. **Update browser binaries**:
   ```bash
   npx playwright install
   ```

3. **Install system dependencies**:
   ```bash
   npx playwright install-deps
   ```

4. **Debug test tertentu**:
   ```bash
   npx playwright test --debug navigation.spec.js
   ```

5. **Lihat screenshot dari test yang gagal**:
   Screenshots otomatis disimpan di folder `test-results/`

## Konfigurasi

File konfigurasi ada di `playwright.config.js`. Konfigurasi ini sudah diatur untuk:
- Menjalankan development server otomatis
- Test di 3 browser (Chromium, Firefox, WebKit)
- Generate HTML report
- Capture screenshots saat test gagal

## Tips

1. **Menjalankan tests secara parallel**: Tests akan berjalan parallel secara default untuk efisiensi
2. **Retry mechanism**: Tests akan di-retry otomatis jika gagal (di CI environment)
3. **Trace viewer**: Gunakan `--trace on` untuk debugging yang lebih detail
4. **Slow motion**: Gunakan `--slowMo=1000` untuk melihat tests berjalan lebih lambat

## Contoh Output

```
Running 20 tests using 3 workers

✓ [chromium] › navigation.spec.js:4:3 › should navigate to all main pages (2s)
✓ [chromium] › skills.spec.js:8:3 › should display skills page correctly (1s)
✓ [chromium] › projects.spec.js:45:3 › should filter projects correctly (3s)
✓ [chromium] › project-detail.spec.js:4:3 › should display project detail page correctly (2s)

20 passed (15s)
```

Tests ini memastikan bahwa semua fitur utama website berfungsi dengan baik dan memberikan confidence bahwa perubahan kode tidak merusak functionality yang sudah ada.

