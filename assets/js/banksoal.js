document.addEventListener('DOMContentLoaded', function() {
    const jenjangCheckboxes = document.querySelectorAll('.jenjang-checkbox');
    const kelasCheckboxes = document.querySelectorAll('.kelas-checkbox');
    const mapelCheckboxes = document.querySelectorAll('.mapel-checkbox');
    const productList = document.getElementById('product-list');
    const nameFilterInput = document.getElementById('name-filter');
    const nameFilterButton = document.getElementById('name-filter-button');

    const products = [{
            name: 'PTS Semester 1 IPA Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa7pts1.png',
            link: 'banksoal/PTS 1 IPA Kelas 7.html'
        },
        {
            name: 'PAS Semester 1 IPA Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa7pas1.png',
            link: 'banksoal/PAS 1 IPA Kelas 7.html'
        },
        {
            name: 'PTS Semester 2 IPA Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa7pts2.png',
            link: 'banksoal/PTS 2 IPA Kelas 7.html'
        },
        {
            name: 'PAT Semester 2 IPA Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa7pat2.png',
            link: 'banksoal/PAT 2 IPA Kelas 7.html'
        },
        {
            name: 'PTS Semester 1 IPA Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa8pts1.png',
            link: 'banksoal/PTS 1 IPA Kelas 8.html'
        },
        {
            name: 'PAS Semester 1 IPA Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa8pas1.png',
            link: 'banksoal/PAS 1 IPA Kelas 8.html'
        },
        {
            name: 'PTS Semester 2 IPA Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa8pts2.png',
            link: 'banksoal/PTS 2 IPA Kelas 8.html'
        },
        {
            name: 'PAT Semester 2 IPA Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa8pat2.png',
            link: 'banksoal/PAT 2 IPA Kelas 8.html'
        },
        {
            name: 'PTS Semester 1 IPA Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa9pts1.png',
            link: 'banksoal/PTS 1 IPA Kelas 9.html'
        },
        {
            name: 'PAS Semester 1 IPA Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa9pas1.png',
            link: 'banksoal/PAS 1 IPA Kelas 9.html'
        },
        {
            name: 'PTS Semester 2 IPA Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa9pts2.png',
            link: 'banksoal/PTS 2 IPA Kelas 9.html'
        },
        {
            name: 'PAT Semester 2 IPA Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'ipa',
            image: 'assets/coversoal/ipa9pat2.png',
            link: 'banksoal/PAT 2 IPA Kelas 9.html'
        },
        {
            name: 'PTS Semester 1 IPS Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'ips',
            image: 'assets/coversoal/pts ips smstr 1  kelas 7.png',
            link: 'banksoal/PTS 1 IPS Kelas 7.html'
        },
        {
            name: 'PAS Semester 1 IPS Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'ips',
            image: 'assets/coversoal/pas ips smstr 1  kelas 7.png',
            link: 'banksoal/PAS 1 IPS Kelas 7.html'
        },
        {
            name: 'PTS Semester 2 IPS Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'ips',
            image: 'assets/coversoal/pts ips smstr 2 kelas 7.png',
            link: 'banksoal/PTS 2 IPS Kelas 7.html'
        },
        {
            name: 'PAT Semester 2 IPS Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'ips',
            image: 'assets/coversoal/pas ips smstr 2 kelas 7.png',
            link: 'banksoal/PAT 2 IPS Kelas 7.html'
        },
        {
            name: 'PTS Semester 1 IPS Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'ips',
            image: 'assets/coversoal/pts ips smstr 1 kelas 8.png',
            link: 'banksoal/PTS 1 IPS Kelas 8.html'
        },
        {
            name: 'PAS Semester 1 IPS Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'ips',
            image: 'assets/coversoal/pas ips smstr 1 kelas 8.png',
            link: 'banksoal/PAS 1 IPS Kelas 8.html'
        },
        {
            name: 'PTS Semester 2 IPS Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'ips',
            image: 'assets/coversoal/pts ips smstr 2 kelas 8.png',
            link: 'banksoal/PTS 2 IPS Kelas 8.html'
        },
        {
            name: 'PAT Semester 2 IPS Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'ips',
            image: 'assets/coversoal/pat ips smstr 2 kelas 8.png',
            link: 'banksoal/PAT 2 IPS Kelas 8.html'
        },
        {
            name: 'PTS Semester 1 IPS Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'ips',
            image: 'assets/coversoal/pts ips smstr 1 kelas 9.png',
            link: 'banksoal/PTS 1 IPS Kelas 9.html'
        },
        {
            name: 'PAS Semester 1 IPS Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'ips',
            image: 'assets/coversoal/pas ips smstr 1 kelas 9.png',
            link: 'banksoal/PAS 1 IPS Kelas 9.html'
        },
        {
            name: 'PTS Semester 2 IPS Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'ips',
            image: 'assets/coversoal/pts ips smstr 2 kelas 9.png',
            link: 'banksoal/PTS 2 IPS Kelas 9.html'
        },
        {
            name: 'PAT Semester 2 IPS Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'ips',
            image: 'assets/coversoal/pat ips smstr 2 kelas 9.png',
            link: 'banksoal/PAT 2 IPS Kelas 9.html'
        },
        {
            name: 'UTS Matematika Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'matematika',
            image: 'assets/coversoal/MTK KELAS 7 UTS.png',
            link: 'banksoal/UTS Matematika Kelas 7.html'
        },
        {
            name: 'UAS Matematika Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'matematika',
            image: 'assets/coversoal/MTK KELAS 7 UAS.png',
            link: 'banksoal/UAS Matematika Kelas 7.html'
        },
        {
            name: 'UTS Matematika Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'matematika',
            image: 'assets/coversoal/MTK KELAS 8 UTS.png',
            link: 'banksoal/UTS Matematika Kelas 8.html'
        },
        {
            name: 'UAS Matematika Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'matematika',
            image: 'assets/coversoal/MTK KELAS 8 UAS.png',
            link: 'banksoal/UAS Matematika Kelas 8.html'
        },
        {
            name: 'UTS Matematika Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'matematika',
            image: 'assets/coversoal/MTK KELAS 9 UTS.png',
            link: 'banksoal/UTS Matematika Kelas 9.html'
        },
        {
            name: 'UAS Matematika Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'matematika',
            image: 'assets/coversoal/MTK KELAS 9 UAS.png',
            link: 'banksoal/UAS Matematika Kelas 9.html'
        },
        {
            name: 'UTS Matematika Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'matematika',
            image: 'assets/coversoal/MTK KELAS 10 UTS.png',
            link: 'banksoal/UTS Matematika Kelas 10.html'
        },
        {
            name: 'UAS Matematika Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'matematika',
            image: 'assets/coversoal/MTK KELAS 10 UAS.png',
            link: 'banksoal/UAS Matematika Kelas 10.html'
        },
        {
            name: 'UTS Matematika Minat Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'matematikapeminatan',
            image: 'assets/coversoal/MTK MINAT KELAS 10 UTS.png',
            link: 'banksoal/UTS Matematika Minat Kelas 10.html'
        },
        {
            name: 'UAS Matematika Minat Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'matematikapeminatan',
            image: 'assets/coversoal/MTK minat KELAS 10 UAS.png',
            link: 'banksoal/UAS Matematika Minat Kelas 10.html'
        },
        {
            name: 'PAT Semester 2 Bahasa Indonesia Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo7pts1.png',
            link: 'banksoal/PTS 1 Bahasa Indonesia Kelas 7.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Indonesia Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo7pas1.png',
            link: 'banksoal/PAS 1 Bahasa Indonesia Kelas 7.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Indonesia Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo7pts2.png',
            link: 'banksoal/PTS 2 Bahasa Indonesia Kelas 7.html'
        },
        {
            name: 'PAT Semester 2 Bahasa Indonesia Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo7pat2.png',
            link: 'banksoal/PAT 2 Bahasa Indonesia Kelas 7.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Indonesia Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo8pts1.png',
            link: 'banksoal/PTS 1 Bahasa Indonesia Kelas 8.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Indonesia Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo8pas1.png',
            link: 'banksoal/PAS 1 Bahasa Indonesia Kelas 8.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Indonesia Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo8pts2.png',
            link: 'banksoal/PTS 2 Bahasa Indonesia Kelas 8.html'
        },
        {
            name: 'PAT Semester 2 Bahasa Indonesia Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo8pat2.png',
            link: 'banksoal/PAT 2 Bahasa Indonesia Kelas 8.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Indonesia Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo9pts1.png',
            link: 'banksoal/PTS 1 Bahasa Indonesia Kelas 9.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Indonesia Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo9pas1.png',
            link: 'banksoal/PAS 1 Bahasa Indonesia Kelas 9.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Indonesia Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo9pts2.png',
            link: 'banksoal/PTS 2 Bahasa Indonesia Kelas 9.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Indonesia Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo10pts1.png',
            link: 'banksoal/PTS 1 Bahasa Indonesia Kelas 10.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Indonesia Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo10pas1.png',
            link: 'banksoal/PAS 1 Bahasa Indonesia Kelas 10.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Indonesia Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo10pts2.png',
            link: 'banksoal/PTS 2 Bahasa Indonesia Kelas 10.html'
        },
        {
            name: 'PAT Semester 2 Bahasa Indonesia Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo10pat2.png',
            link: 'banksoal/PAT 2 Bahasa Indonesia Kelas 10.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Indonesia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo11pts1.png',
            link: 'banksoal/PTS 1 Bahasa Indonesia Kelas 11.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Indonesia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo11pas1.png',
            link: 'banksoal/PAS 1 Bahasa Indonesia Kelas 11.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Indonesia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo11pts2.png',
            link: 'banksoal/PTS 2 Bahasa Indonesia Kelas 11.html'
        },
        {
            name: 'PAT Semester 2 Bahasa Indonesia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo11pat2.png',
            link: 'banksoal/PAT 2 Bahasa Indonesia Kelas 11.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Indonesia Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo12pts1.png',
            link: 'banksoal/PTS 1 Bahasa Indonesia Kelas 12.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Indonesia Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo12pas1.png',
            link: 'banksoal/PAS 1 Bahasa Indonesia Kelas 12.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Indonesia Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'indonesia',
            image: 'assets/coversoal/bindo12pts2.png',
            link: 'banksoal/PTS 2 Bahasa Indonesia Kelas 12.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Inggris Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'inggris',
            image: 'assets/coversoal/bing7pts1.png',
            link: 'banksoal/PTS 1 Bahasa Inggris Kelas 7.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Inggris Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'inggris',
            image: 'assets/coversoal/bing7pas1.png',
            link: 'banksoal/PAS 1 Bahasa Inggris Kelas 7.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Inggris Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'inggris',
            image: 'assets/coversoal/bing7pts2.png',
            link: 'banksoal/PTS 2 Bahasa Inggris Kelas 7.html'
        },
        {
            name: 'PAT Semester 2 Bahasa Inggris Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'inggris',
            image: 'assets/coversoal/bing7pat2.png',
            link: 'banksoal/PAT 2 Bahasa Inggris Kelas 7.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Inggris Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'inggris',
            image: 'assets/coversoal/bing8pts1.png',
            link: 'banksoal/PTS 1 Bahasa Inggris Kelas 8.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Inggris Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'inggris',
            image: 'assets/coversoal/bing8pas1.png',
            link: 'banksoal/PAS 1 Bahasa Inggris Kelas 8.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Inggris Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'inggris',
            image: 'assets/coversoal/bing8pts2.png',
            link: 'banksoal/PTS 2 Bahasa Inggris Kelas 8.html'
        },
        {
            name: 'PAT Semester 2 Bahasa Inggris Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'inggris',
            image: 'assets/coversoal/bing8pat2.png',
            link: 'banksoal/PAT 2 Bahasa Inggris Kelas 8.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Inggris Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'inggris',
            image: 'assets/coversoal/bing9pts1.png',
            link: 'banksoal/PTS 1 Bahasa Inggris Kelas 9.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Inggris Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'inggris',
            image: 'assets/coversoal/bing9pas1.png',
            link: 'banksoal/PAS 1 Bahasa Inggris Kelas 9.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Inggris Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'inggris',
            image: 'assets/coversoal/bing9pts2.png',
            link: 'banksoal/PTS 2 Bahasa Inggris Kelas 9.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Inggris Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'inggris',
            image: 'assets/coversoal/bing10pts1.png',
            link: 'banksoal/PTS 1 Bahasa Inggris Kelas 10.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Inggris Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'inggris',
            image: 'assets/coversoal/bing10pas1.png',
            link: 'banksoal/PAS 1 Bahasa Inggris Kelas 10.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Inggris Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'inggris',
            image: 'assets/coversoal/bing10pts2.png',
            link: 'banksoal/PTS 2 Bahasa Inggris Kelas 10.html'
        },
        {
            name: 'PAT Semester 2 Bahasa Inggris Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'inggris',
            image: 'assets/coversoal/bing10pat2.png',
            link: 'banksoal/PAT 2 Bahasa Inggris Kelas 10.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Inggris Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'inggris',
            image: 'assets/coversoal/bing11pts1.png',
            link: 'banksoal/PTS 1 Bahasa Inggris Kelas 11.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Inggris Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'inggris',
            image: 'assets/coversoal/bing11pas1.png',
            link: 'banksoal/PAS 1 Bahasa Inggris Kelas 11.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Inggris Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'inggris',
            image: 'assets/coversoal/bing11pts2.png',
            link: 'banksoal/PTS 2 Bahasa Inggris Kelas 11.html'
        },
        {
            name: 'PAT Semester 2 Bahasa Inggris Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'inggris',
            image: 'assets/coversoal/bing11pat2.png',
            link: 'banksoal/PAT 2 Bahasa Inggris Kelas 11.html'
        },
        {
            name: 'PTS Semester 1 Bahasa Inggris Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'inggris',
            image: 'assets/coversoal/bing12pts1.png',
            link: 'banksoal/PTS 1 Bahasa Inggris Kelas 12.html'
        },
        {
            name: 'PAS Semester 1 Bahasa Inggris Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'inggris',
            image: 'assets/coversoal/bing12pas1.png',
            link: 'banksoal/PAS 1 Bahasa Inggris Kelas 12.html'
        },
        {
            name: 'PTS Semester 2 Bahasa Inggris Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'inggris',
            image: 'assets/coversoal/bing12pts2.png',
            link: 'banksoal/PTS 2 Bahasa Inggris Kelas 12.html'
        },
        {
            name: 'PTS Semester 1 Ekonomi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi10pts1.png',
            link: 'banksoal/PTS 1 Ekonomi Kelas 10.html'
        },
        {
            name: 'PAS Semester 1 Ekonomi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi10pas1.png',
            link: 'banksoal/PAS 1 Ekonomi Kelas 10.html'
        },
        {
            name: 'PTS Semester 2 Ekonomi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi10pts2.png',
            link: 'banksoal/PTS 2 Ekonomi Kelas 10.html'
        },
        {
            name: 'PAT Semester 2 Ekonomi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi10pat2.png',
            link: 'banksoal/PAT 2 Ekonomi Kelas 10.html'
        },
        {
            name: 'PTS Semester 1 Ekonomi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi11pts1.png',
            link: 'banksoal/PTS 1 Ekonomi Kelas 11.html'
        },
        {
            name: 'PAS Semester 1 Ekonomi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi11pas1.png',
            link: 'banksoal/PAS 1 Ekonomi Kelas 11.html'
        },
        {
            name: 'PTS Semester 2 Ekonomi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi11pts2.png',
            link: 'banksoal/PTS 2 Ekonomi Kelas 11.html'
        },
        {
            name: 'PAT Semester 2 Ekonomi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi11pat2.png',
            link: 'banksoal/PAT 2 Ekonomi Kelas 11.html'
        },
        {
            name: 'PTS Semester 1 Ekonomi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi12pts1.png',
            link: 'banksoal/PTS 1 Ekonomi Kelas 12.html'
        },
        {
            name: 'PAS Semester 1 Ekonomi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi12pas1.png',
            link: 'banksoal/PAS 1 Ekonomi Kelas 12.html'
        },
        {
            name: 'PTS Semester 2 Ekonomi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'ekonomi',
            image: 'assets/coversoal/ekonomi12pts2.png',
            link: 'banksoal/PTS 2 Ekonomi Kelas 12.html'
        },
        {
            name: 'PTS Semester 1 Geografi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi10pts1.png',
            link: 'banksoal/PTS 1 Geografi Kelas 10.html'
        },
        {
            name: 'PAS Semester 1 Geografi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi10pas1.png',
            link: 'banksoal/PAS 1 Geografi Kelas 10.html'
        },
        {
            name: 'PTS Semester 2 Geografi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi10pts2.png',
            link: 'banksoal/PTS 2 Geografi Kelas 10.html'
        },
        {
            name: 'PAT Semester 2 Geografi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi10pat2.png',
            link: 'banksoal/PAT 2 Geografi Kelas 10.html'
        },
        {
            name: 'PTS Semester 1 Geografi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi11pts1.png',
            link: 'banksoal/PTS 1 Geografi Kelas 11.html'
        },
        {
            name: 'PAS Semester 1 Geografi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi11pas1.png',
            link: 'banksoal/PAS 1 Geografi Kelas 11.html'
        },
        {
            name: 'PTS Semester 2 Geografi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi11pts2.png',
            link: 'banksoal/PTS 2 Geografi Kelas 11.html'
        },
        {
            name: 'PAT Semester 2 Geografi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi11pat2.png',
            link: 'banksoal/PAT 2 Geografi Kelas 11.html'
        },
        {
            name: 'PTS Semester 1 Geografi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi12pts1.png',
            link: 'banksoal/PTS 1 Geografi Kelas 12.html'
        },
        {
            name: 'PAS Semester 1 Geografi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi12pas1.png',
            link: 'banksoal/PAS 1 Geografi Kelas 12.html'
        },
        {
            name: 'PTS Semester 2 Geografi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'geografi',
            image: 'assets/coversoal/geografi12pts2.png',
            link: 'banksoal/PTS 2 Geografi Kelas 12.html'
        },
	{
            name: 'PTS Semester 1 Sosiologi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi10pts1.png',
            link: 'banksoal/PTS 1 Sosiologi Kelas 10.html'
        },
        {
            name: 'PAS Semester 1 Sosiologi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi10pas1.png',
            link: 'banksoal/PAS 1 Sosiologi Kelas 10.html'
        },
        {
            name: 'PTS Semester 2 Sosiologi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi10pts2.png',
            link: 'banksoal/PTS 2 Sosiologi Kelas 10.html'
        },
        {
            name: 'PAT Semester 2 Sosiologi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi10pat2.png',
            link: 'banksoal/PAT 2 Sosiologi Kelas 10.html'
        },
        {
            name: 'PTS Semester 1 Sosiologi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi11pts1.png',
            link: 'banksoal/PTS 1 Sosiologi Kelas 11.html'
        },
        {
            name: 'PAS Semester 1 Sosiologi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi11pas1.png',
            link: 'banksoal/PAS 1 Sosiologi Kelas 11.html'
        },
        {
            name: 'PTS Semester 2 Sosiologi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi11pts2.png',
            link: 'banksoal/PTS 2 Sosiologi Kelas 11.html'
        },
        {
            name: 'PAT Semester 2 Sosiologi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi11pat2.png',
            link: 'banksoal/PAT 2 Sosiologi Kelas 11.html'
        },
        {
            name: 'PTS Semester 1 Sosiologi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi12pts1.png',
            link: 'banksoal/PTS 1 Sosiologi Kelas 12.html'
        },
        {
            name: 'PAS Semester 1 Sosiologi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi12pas1.png',
            link: 'banksoal/PAS 1 Sosiologi Kelas 12.html'
        },
        {
            name: 'PTS Semester 2 Sosiologi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'sosiologi',
            image: 'assets/coversoal/sosiologi12pts2.png',
            link: 'banksoal/PTS 2 Sosiologi Kelas 12.html'
        },
        {
            name: 'PTS Semester 1 Sejarah Indonesia Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo10pts1.png',
            link: 'banksoal/PTS 1 Sejarah Indonesia Kelas 10.html'
        },
        {
            name: 'PAS Semester 1 Sejarah Indonesia Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo10pas1.png',
            link: 'banksoal/PAS 1 Sejarah Indonesia Kelas 10.html'
        },
        {
            name: 'PTS Semester 2 Sejarah Indonesia Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo10pts2.png',
            link: 'banksoal/PTS 2 Sejarah Indonesia Kelas 10.html'
        },
        {
            name: 'PAT Semester 2 Sejarah Indonesia Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo10pat2.png',
            link: 'banksoal/PAT 2 Sejarah Indonesia Kelas 10.html'
        },
        {
            name: 'PTS Semester 1 Sejarah Indonesia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo11pts1.png',
            link: 'banksoal/PTS 1 Sejarah Indonesia Kelas 11.html'
        },
        {
            name: 'PAS Semester 1 Sejarah Indonesia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo11pas1.png',
            link: 'banksoal/PAS 1 Sejarah Indonesia Kelas 11.html'
        },
        {
            name: 'PTS Semester 2 Sejarah Indonesia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo11pts2.png',
            link: 'banksoal/PTS 2 Sejarah Indonesia Kelas 11.html'
        },
        {
            name: 'PAT Semester 2 Sejarah Indonesia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo11pat2.png',
            link: 'banksoal/PAT 2 Sejarah Indonesia Kelas 11.html'
        },
        {
            name: 'PTS Semester 1 Sejarah Indonesia Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo12pts1.png',
            link: 'banksoal/PTS 1 Sejarah Indonesia Kelas 12.html'
        },
        {
            name: 'PAS Semester 1 Sejarah Indonesia Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo12pas1.png',
            link: 'banksoal/PAS 1 Sejarah Indonesia Kelas 12.html'
        },
        {
            name: 'PTS Semester 2 Sejarah Indonesia Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'sejarahindonesia',
            image: 'assets/coversoal/sejindo12pts2.png',
            link: 'banksoal/PTS 2 Sejarah Indonesia Kelas 12.html'
        },
        {
            name: 'PTS Semester 1 Sejarah Peminatan Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin10pts1.png',
            link: 'banksoal/PTS 1 Sejarah Peminatan Kelas 10.html'
        },
        {
            name: 'PAS Semester 1 Sejarah Peminatan Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin10pas1.png',
            link: 'banksoal/PAS 1 Sejarah Peminatan Kelas 10.html'
        },
        {
            name: 'PTS Semester 2 Sejarah Peminatan Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin10pts2.png',
            link: 'banksoal/PTS 2 Sejarah Peminatan Kelas 10.html'
        },
        {
            name: 'PAT Semester 2 Sejarah Peminatan Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin10pat2.png',
            link: 'banksoal/PAT 2 Sejarah Peminatan Kelas 10.html'
        },
        {
            name: 'PTS Semester 1 Sejarah Peminatan Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin11pts1.png',
            link: 'banksoal/PTS 1 Sejarah Peminatan Kelas 11.html'
        },
        {
            name: 'PAS Semester 1 Sejarah Peminatan Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin11pas1.png',
            link: 'banksoal/PAS 1 Sejarah Peminatan Kelas 11.html'
        },
        {
            name: 'PTS Semester 2 Sejarah Peminatan Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin11pts2.png',
            link: 'banksoal/PTS 2 Sejarah Peminatan Kelas 11.html'
        },
        {
            name: 'PAT Semester 2 Sejarah Peminatan Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin11pat2.png',
            link: 'banksoal/PAT 2 Sejarah Peminatan Kelas 11.html'
        },
        {
            name: 'PTS Semester 1 Sejarah Peminatan Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin12pts1.png',
            link: 'banksoal/PTS 1 Sejarah Peminatan Kelas 12.html'
        },
        {
            name: 'PAS Semester 1 Sejarah Peminatan Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin12pas1.png',
            link: 'banksoal/PAS 1 Sejarah Peminatan Kelas 12.html'
        },
        {
            name: 'PTS Semester 2 Sejarah Peminatan Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'sejarahpeminatan',
            image: 'assets/coversoal/sejmin12pts2.png',
            link: 'banksoal/PTS 2 Sejarah Peminatan Kelas 12.html'
        },
        {
            name: 'PAS Semester 1 Katolik Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'katolik',
            image: 'assets/coversoal/PAS 1 Katolik Kelas 7.png',
            link: 'banksoal/PAS 1 Katolik Kelas 7.html'
        },
        {
            name: 'PAS Semester 1 PAI Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'islam',
            image: 'assets/coversoal/PAS 1 PAI Kelas 7.png',
            link: 'banksoal/PAS 1 PAI Kelas 7.html'
        },
        {
            name: 'PAS Semester 1 Kristen Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'kristen',
            image: 'assets/coversoal/PAS 1 Kristen Kelas 7.png',
            link: 'banksoal/PAS 1 Kristen Kelas 7.html'
        },
        {
            name: 'PAS Semester 1 PJOK Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'pjok',
            image: 'assets/coversoal/PAS 1 PJOK Kelas 7.png',
            link: 'banksoal/PAS 1 PJOK Kelas 7.html'
        },
        {
            name: 'PAS Semester 1 PKN Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'pkn',
            image: 'assets/coversoal/PAS 1 PKN Kelas 7.png',
            link: 'banksoal/PAS 1 PKN Kelas 7.html'
        },
        {
            name: 'PAT Katolik Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'katolik',
            image: 'assets/coversoal/PAT Katolik Kelas 7.png',
            link: 'banksoal/PAT Katolik Kelas 7.html'
        },
        {
            name: 'PAT PAI Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'islam',
            image: 'assets/coversoal/PAT PAI Kelas 7.png',
            link: 'banksoal/PAT PAI Kelas 7.html'
        },
        {
            name: 'PAT Kristen Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'kristen',
            image: 'assets/coversoal/PAT Kristen Kelas 7.png',
            link: 'banksoal/PAT Kristen Kelas 7.html'
        },
        {
            name: 'PAT PJOK Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'pjok',
            image: 'assets/coversoal/PAT PJOK Kelas 7.png',
            link: 'banksoal/PAT PJOK Kelas 7.html'
        },
        {
            name: 'PAT PKN Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'pkn',
            image: 'assets/coversoal/PAT PKN Kelas 7.png',
            link: 'banksoal/PAT PKN Kelas 7.html'
        },
        {
            name: 'PTS Semester 1 Katolik Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'katolik',
            image: 'assets/coversoal/PTS 1 Katolik Kelas 7.png',
            link: 'banksoal/PTS 1 Katolik Kelas 7.html'
        },
        {
            name: 'PTS Semester 2 Katolik Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'katolik',
            image: 'assets/coversoal/PTS 2 Katolik Kelas 7.png',
            link: 'banksoal/PTS 2 Katolik Kelas 7.html'
        },
        {
            name: 'PTS Semester 1 PAI Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'islam',
            image: 'assets/coversoal/PTS 1 PAI Kelas 7.png',
            link: 'banksoal/PTS 1 PAI Kelas 7.html'
        },
        {
            name: 'PTS Semester 2 PAI Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'islam',
            image: 'assets/coversoal/PTS 2 PAI Kelas 7.png',
            link: 'banksoal/PTS 2 PAI Kelas 7.html'
        },
        {
            name: 'PTS Semester 1 Kristen Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'kristen',
            image: 'assets/coversoal/PTS 1 Kristen Kelas 7.png',
            link: 'banksoal/PTS 1 Kristen Kelas 7.html'
        },
        {
            name: 'PTS Semester 2 Kristen Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'kristen',
            image: 'assets/coversoal/PTS 2 Kristen Kelas 7.png',
            link: 'banksoal/PTS 2 Kristen Kelas 7.html'
        },
        {
            name: 'PTS Semester 1 PJOK Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'pjok',
            image: 'assets/coversoal/PTS 1 PJOK Kelas 7.png',
            link: 'banksoal/PTS 1 PJOK Kelas 7.html'
        },
        {
            name: 'PTS Semester 2 PJOK Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'pjok',
            image: 'assets/coversoal/PTS 2 PJOK Kelas 7.png',
            link: 'banksoal/PTS 2 PJOK Kelas 7.html'
        },
        {
            name: 'PTS Semester 1 PKN Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'pkn',
            image: 'assets/coversoal/PTS 1 PKN Kelas 7.png',
            link: 'banksoal/PTS 1 PKN Kelas 7.html'
        },
        {
            name: 'PTS Semester 2 PKN Kelas 7',
            jenjang: 'smp',
            kelas: 'tujuh',
            mapel: 'pkn',
            image: 'assets/coversoal/PTS 2 PKN Kelas 7.png',
            link: 'banksoal/PTS 2 PKN Kelas 7.html'
        },
        {
            name: 'PAS Semester 1 Katolik Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'katolik',
            image: 'assets/coversoal/PAS 1 Katolik Kelas 8.png',
            link: 'banksoal/PAS 1 Katolik Kelas 8.html'
        },
        {
            name: 'PAS Semester 1 PAI Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'islam',
            image: 'assets/coversoal/PAS 1 PAI Kelas 8.png',
            link: 'banksoal/PAS 1 PAI Kelas 8.html'
        },
        {
            name: 'PAS Semester 1 Kristen Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'kristen',
            image: 'assets/coversoal/PAS 1 Kristen Kelas 8.png',
            link: 'banksoal/PAS 1 Kristen Kelas 8.html'
        },
        {
            name: 'PAS Semester 1 PJOK Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'pjok',
            image: 'assets/coversoal/PAS 1 PJOK Kelas 8.png',
            link: 'banksoal/PAS 1 PJOK Kelas 8.html'
        },
        {
            name: 'PAS Semester 1 PKN Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'pkn',
            image: 'assets/coversoal/PAS 1 PKN Kelas 8.png',
            link: 'banksoal/PAS 1 PKN Kelas 8.html'
        },
        {
            name: 'PAT Katolik Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'katolik',
            image: 'assets/coversoal/PAT Katolik Kelas 8.png',
            link: 'banksoal/PAT Katolik Kelas 8.html'
        },
        {
            name: 'PAT PAI Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'islam',
            image: 'assets/coversoal/PAT PAI Kelas 8.png',
            link: 'banksoal/PAT PAI Kelas 8.html'
        },
        {
            name: 'PAT Kristen Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'kristen',
            image: 'assets/coversoal/PAT Kristen Kelas 8.png',
            link: 'banksoal/PAT Kristen Kelas 8.html'
        },
        {
            name: 'PAT PJOK Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'pjok',
            image: 'assets/coversoal/PAT PJOK Kelas 8.png',
            link: 'banksoal/PAT PJOK Kelas 8.html'
        },
        {
            name: 'PAT PKN Kelas 8',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'pkn',
            image: 'assets/coversoal/PAT PKN Kelas 8.png',
            link: 'banksoal/PAT PKN Kelas 8.html'
        },
        {
            name: 'PTS Semester 1 Katolik Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'katolik',
            image: 'assets/coversoal/PTS 1 Katolik Kelas 8.png',
            link: 'banksoal/PTS 1 Katolik Kelas 8.html'
        },
        {
            name: 'PTS Semester 2 Katolik Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'katolik',
            image: 'assets/coversoal/PTS 2 Katolik Kelas 8.png',
            link: 'banksoal/PTS 2 Katolik Kelas 8.html'
        },
        {
            name: 'PTS Semester 1 PAI Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'islam',
            image: 'assets/coversoal/PTS 1 PAI Kelas 8.png',
            link: 'banksoal/PTS 1 PAI Kelas 8.html'
        },
        {
            name: 'PTS Semester 2 PAI Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'islam',
            image: 'assets/coversoal/PTS 2 PAI Kelas 8.png',
            link: 'banksoal/PTS 2 PAI Kelas 8.html'
        },
        {
            name: 'PTS Semester 1 Kristen Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'kristen',
            image: 'assets/coversoal/PTS 1 Kristen Kelas 8.png',
            link: 'banksoal/PTS 1 Kristen Kelas 8.html'
        },
        {
            name: 'PTS Semester 2 Kristen Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'kristen',
            image: 'assets/coversoal/PTS 2 Kristen Kelas 8.png',
            link: 'banksoal/PTS 2 Kristen Kelas 8.html'
        },
        {
            name: 'PTS Semester 1 PJOK Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'pjok',
            image: 'assets/coversoal/PTS 1 PJOK Kelas 88.png',
            link: 'banksoal/PTS 1 PJOK Kelas 8.html'
        },
        {
            name: 'PTS Semester 2 PJOK Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'pjok',
            image: 'assets/coversoal/PTS 2 PJOK Kelas 8.png',
            link: 'banksoal/PTS 2 PJOK Kelas 8.html'
        },
        {
            name: 'PTS Semester 1 PKN Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'pkn',
            image: 'assets/coversoal/PTS 1 PKN Kelas 8.png',
            link: 'banksoal/PTS 1 PKN Kelas 8.html'
        },
        {
            name: 'PTS Semester 2 PKN Kelas 7',
            jenjang: 'smp',
            kelas: 'delapan',
            mapel: 'pkn',
            image: 'assets/coversoal/PTS 1 PKN Kelas 8.png',
            link: 'banksoal/PTS 1 PKN Kelas 8.html'
        },
        {
            name: 'PAS Semester 1 PAI Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'islam',
            image: 'assets/coversoal/PAS 1 PAI Kelas 9.png',
            link: 'banksoal/PAS 1 PAI Kelas 9.html'
        },
        {
            name: 'PAS Semester 1 Kristen Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'kristen',
            image: 'assets/coversoal/PAS 1 Kristen Kelas 9.png',
            link: 'banksoal/PAS 1 Kristen Kelas 9.html'
        },
        {
            name: 'PAS Semester 1 PJOK Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'pjok',
            image: 'assets/coversoal/PAS 1 PJOK Kelas 9.png',
            link: 'banksoal/PAS 1 PJOK Kelas 9.html'
        },
        {
            name: 'PAS Semester 1 PKN Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'pkn',
            image: 'assets/coversoal/PAS 1 PKN Kelas 9.png',
            link: 'banksoal/PAS 1 PKN Kelas 9.html'
        },
        {
            name: 'PAT PAI Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'islam',
            image: 'assets/coversoal/PAT PAI Kelas 9.png',
            link: 'banksoal/PAT PAI Kelas 9.html'
        },
        {
            name: 'PAT Kristen Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'kristen',
            image: 'assets/coversoal/PAT Kristen Kelas 9.png',
            link: 'banksoal/PAT Kristen Kelas 9.html'
        },
        {
            name: 'PAT PJOK Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'pjok',
            image: 'assets/coversoal/PAT PJOK Kelas 9.png',
            link: 'banksoal/PAT PJOK Kelas 9.html'
        },
        {
            name: 'PAT PKN Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'pkn',
            image: 'assets/coversoal/PAT PKN Kelas 9.png',
            link: 'banksoal/PAT PKN Kelas 9.html'
        },
        {
            name: 'PTS Semester 1 PAI Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'islam',
            image: 'assets/coversoal/PTS 1 PAI Kelas 9.png',
            link: 'banksoal/PTS 1 PAI Kelas 9.html'
        },
        {
            name: 'PTS Semester 2 PAI Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'islam',
            image: 'assets/coversoal/PTS 2 PAI Kelas 9.png',
            link: 'banksoal/PTS 2 PAI Kelas 9.html'
        },
        {
            name: 'PTS Semester 1 Kristen Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'kristen',
            image: 'assets/coversoal/PTS 1 Kristen Kelas 9.png',
            link: 'banksoal/PTS 1 Kristen Kelas 9.html'
        },
        {
            name: 'PTS Semester 2 Kristen Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'kristen',
            image: 'assets/coversoal/PTS 2 Kristen Kelas 9.png',
            link: 'banksoal/PTS 2 Kristen Kelas 9.html'
        },
        {
            name: 'PTS Semester 1 PJOK Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'pjok',
            image: 'assets/coversoal/PTS 1 PJOK Kelas 9.png',
            link: 'banksoal/PTS 1 PJOK Kelas 9.html'
        },
        {
            name: 'PTS Semester 2 PJOK Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'pjok',
            image: 'assets/coversoal/PTS 2 PJOK Kelas 9.png',
            link: 'banksoal/PTS 2 PJOK Kelas 9.html'
        },
        {
            name: 'PTS Semester 1 PKN Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'pkn',
            image: 'assets/coversoal/PTS 1 PKN Kelas 9.png',
            link: 'banksoal/PTS 1 PKN Kelas 9.html'
        },
        {
            name: 'PTS Semester 2 PKN Kelas 9',
            jenjang: 'smp',
            kelas: 'sembilan',
            mapel: 'pkn',
            image: 'assets/coversoal/PTS 2 PKN Kelas 9.png',
            link: 'banksoal/PTS 2 PKN Kelas 9.html'
        },
        {
            name: 'PAT Biologi Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'biologi',
            image: 'assets/coversoal/Soal PAT Biologi Kelas 11 K13.png',
            link: 'banksoal/PAT Biologi Kelas 11.html'
        },
        {
            name: 'PAS Biologi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'biologi',
            image: 'assets/coversoal/Soal PAS Biologi Kelas XII.png',
            link: 'banksoal/PAS Biologi Kelas 12.html'
        },
        {
            name: 'PAT Biologi Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'biologi',
            image: 'assets/coversoal/PAT Biologi Kelas 12.png',
            link: 'banksoal/PAT Biologi Kelas 12.html'
        },
        {
            name: 'UAS Biologi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'biologi',
            image: 'assets/coversoal/Soal Biologi UAS Kelas 10.png',
            link: 'banksoal/UAS Biologi Kelas 10.html'
        },
        {
            name: 'UTS Biologi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'biologi',
            image: 'assets/coversoal/Soal Biologi UTS Kelas 10.png',
            link: 'banksoal/UTS Biologi Kelas 10.html'
        },
        {
            name: 'UAS Kimia Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'kimia',
            image: 'assets/coversoal/Soal UAS Kimia kelas 12.png',
            link: 'banksoal/UAS Kimia Kelas 12.html'
        },
        {
            name: 'UTS Biologi Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'biologi',
            image: 'assets/coversoal/Soal Biologi UTS Kelas 10.png',
            link: 'banksoal/UTS Biologi Kelas 10.html'
        },
        {
            name: 'UAS Fisika Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'fisika',
            image: 'assets/coversoal/Soal Fisika Kelas 11 SMA UAS.png',
            link: 'banksoal/UAS Fisika Kelas 11.html'
        },
        {
            name: 'UTS Fisika Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'fisika',
            image: 'assets/coversoal/Soal Fisika Kelas 11 SMA UTS.png',
            link: 'banksoal/UTS Fisika Kelas 11.html'
        },
        {
            name: 'UAS Kimia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'kimia',
            image: 'assets/coversoal/Soal UAS KIMIA KELAS 11.png',
            link: 'banksoal/UAS Kimia Kelas 11.html'
        },
        {
            name: 'UTS Kimia Kelas 11',
            jenjang: 'sma',
            kelas: 'sebelas',
            mapel: 'kimia',
            image: 'assets/coversoal/Soal UTS KIMIA KELAS 11.png',
            link: 'banksoal/UTS Kimia Kelas 11.html'
        },
        {
            name: 'UAS Fisika Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'fisika',
            image: 'assets/coversoal/Soal Fisika Kelas 10 SMA UTS.png',
            link: 'banksoal/UAS Fisika Kelas 10.html'
        },
        {
            name: 'UTS Kimia Kelas 10',
            jenjang: 'sma',
            kelas: 'sepuluh',
            mapel: 'kimia',
            image: 'assets/coversoal/Soal KIMIA UTS kelas 10.png',
            link: 'banksoal/UTS Kimia Kelas 10.html'
        },
        {
            name: 'UTS Fisika Kelas 12',
            jenjang: 'sma',
            kelas: 'duabelas',
            mapel: 'fisika',
            image: 'assets/coversoal/Soal Fisika Kelas 12 SMA UTS.png',
            link: 'banksoal/UTS Fisika Kelas 12.html'
        },


    ];

    // Attach event listeners to checkboxes for jenjang, kelas, and mapel
    jenjangCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateProductList);
    });

    kelasCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateProductList);
    });

    mapelCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateProductList);
    });

    nameFilterButton.addEventListener('click', updateProductList);

    function updateProductList() {
        const selectedJenjangs = Array.from(jenjangCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const selectedKelas = Array.from(kelasCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const selectedMapels = Array.from(mapelCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const keyword = nameFilterInput.value.toLowerCase();

        renderProducts(selectedJenjangs, selectedKelas, selectedMapels, keyword);
    }

    function renderProducts(selectedJenjangs, selectedKelas, selectedMapels, keyword) {
        productList.innerHTML = ''; // Clear existing product cards

        products.forEach(function(product) {
            const { name, jenjang, kelas, mapel, image, link } = product;

            const jenjangMatch = selectedJenjangs.length === 0 || selectedJenjangs.includes(jenjang);
            const kelasMatch = selectedKelas.length === 0 || selectedKelas.includes(kelas);
            const mapelMatch = selectedMapels.length === 0 || selectedMapels.includes(mapel);
            const nameMatch = name.toLowerCase().includes(keyword);

            if (jenjangMatch && kelasMatch && mapelMatch && nameMatch) {
                const productCard = createProductCard(name, jenjang, kelas, mapel, image, link);
                productList.appendChild(productCard);
            }
        });
    }

    function createProductCard(name, jenjang, kelas, mapel, image, link) {
        const productCard = document.createElement('a'); // Wrap the product card in an anchor tag
        productCard.classList.add('product');
        productCard.href = link; // Set the href attribute to the product's link

        const productName = document.createElement('h3');
        productName.textContent = name;

        const productDetails = document.createElement('p');
        productDetails.textContent = `Jenjang: ${jenjang} | Kelas: ${kelas} | Mapel: ${mapel}`;

        // Create an image element and set its source and alt text
        const productImage = document.createElement('img');
        productImage.src = image;
        productImage.alt = name;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);

        return productCard;
    }

    // Initial render
    renderProducts([], [], [], '');
});