let currentLang = 'ne';
const startDate = new Date('2026-03-27');
const goalDate = new Date('2031-03-27');

const translations = {
    ne: {
        govSub: "नेपाल सरकार",
        mainHeader: "शासकीय सुधार १०० बुँदे कार्यसूची",
        tagline: "संविधान संशोधन, प्रशासनिक पुनर्संरचना र नागरिक सेवा प्रवाहको सुधार मार्गचित्रको वस्तुगत ट्र्याकिङ पोर्टल।",
        lblRemaining: "बाँकी कार्यान्वयन समय",
        lblOngoing: "प्रक्रियामा रहेका",
        lblDone: "सम्पन्न बुँदाहरू",
        lblTotal: "कुल कार्यसूची",
        lblSearch: "सुधार कार्यसूची खोज्नुहोस्",
        placeholderSearch: "बुँदा नम्बर वा मुख्य शब्द...",
        lblStatusSel: "अवस्था",
        lblDeadlineSel: "समयसीमा",
        lblCategories: "सुधारका प्रमुख क्षेत्रहरू:",
        allStatuses: "सबै अवस्थाहरू",
        allScales: "कुनै पनि समय",
        statusInProgress: "प्रक्रियामा",
        statusCompleted: "सम्पन्न",
        daysLeft: "दिन बाँकी",
        totalDays: "कुल दिन",
        progressLabel: "प्रगति विवरण",
        whatIsThis: "अवधारणा र उद्देश्य",
        impactLabel: "नागरिकमा प्रभाव",
        detailedContext: "विषयवस्तुको विस्तृत विवरण",
        actionPlan: "कार्ययोजना र माइलस्टोनहरू",
        lblSector: "क्षेत्र:",
        lblDeadline: "समयसीमा:",
        lblDays: "दिन",
        lblHrs: "घण्टा",
        lblMins: "मिनेट",
        genericConcept: "यस रणनीतिक बुँदाले शासकीय प्रणालीको प्रभावकारिता वृद्धि गर्दै नागरिकप्रतिको जवाफदेहिता सुनिश्चित गर्ने लक्ष्य राखेको छ।",
        genericImpact: "यसको सफल कार्यान्वयनपश्चात नागरिक सेवा प्रवाहमा हुने ढिलासुस्तीको अन्त्य भई सीधा लाभ जनतामा पुग्नेछ।",
        actionPoints: [
            "कार्यविधि तर्जुमा र स्वीकृत",
            "जनशक्ति पहिचान र स्रोत व्यवस्थापन",
            "कार्यान्वयन र प्रगति अनुगमन"
        ],
        footerDesc: "नेपाल सरकारको मन्त्रिपरिषद्‌को मिति २०८२ चैत १३ को बैठकबाट स्वीकृत १०० बुँदे शासकीय सुधारको मार्गचित्र ट्र्याकिङ गर्ने आधिकारिक नागरिक सूचना पोर्टल।",
        govLinks: "सरकारी लिंकहरू",
        citizenInfo: "अभिलेख तथा जानकारी",
        contactTitle: "सम्पर्क ठेगाना",
        devCredit: "Keshav Poudel द्वारा विकसित"
    },
    en: {
        govSub: "Government of Nepal",
        mainHeader: "100-Point Governance Reform",
        tagline: "Official tracking portal for the 100-point reform roadmap for constitutional amendment, administrative restructuring, and public services.",
        lblRemaining: "Implementation Countdown",
        lblOngoing: "Ongoing",
        lblDone: "Completed Tasks",
        lblTotal: "Total Items",
        lblSearch: "Search Reforms",
        placeholderSearch: "Search by number or keyword...",
        lblStatusSel: "Status",
        lblDeadlineSel: "Timeline",
        lblCategories: "Strategic Reform Sectors:",
        allStatuses: "All Statuses",
        allScales: "Any Duration",
        statusInProgress: "In Progress",
        statusCompleted: "Completed",
        daysLeft: "Days Remaining",
        totalDays: "Total Duration",
        progressLabel: "Activity Progress",
        whatIsThis: "Concept & Purpose",
        impactLabel: "Citizen Impact",
        detailedContext: "Detailed Roadmap Context",
        actionPlan: "Action Plan & Milestones",
        lblSector: "Sector:",
        lblDeadline: "Deadline:",
        lblDays: "Days",
        lblHrs: "Hours",
        lblMins: "Minutes",
        genericConcept: "This strategic point aims to enhance the effectiveness of the governing system and institutionalize public accountability.",
        genericImpact: "Upon successful implementation, bureaucratic delays in service delivery will end, ensuring direct benefits to the public.",
        actionPoints: [
            "Policy Formulation & Approval",
            "Resource Identification & Management",
            "Implementation & Progress Monitoring"
        ],
        footerDesc: "Authorized tracking portal for the local and federal 100-point governance roadmap approved by the Cabinet on March 27, 2026.",
        govLinks: "Government Links",
        citizenInfo: "Records & Notices",
        contactTitle: "Contact Info",
        devCredit: "Developed by Keshav Poudel"
    }
};

const sectors = {
    all: { ne: "सबै", en: "All" },
    unity: { ne: "साझा प्रतिबद्धता", en: "Consensus" },
    admin: { ne: "प्रशासनिक सुधार", en: "Admin Reform" },
    service: { ne: "सेवा प्रवाह", en: "Service Delivery" },
    digital: { ne: "डिजिटल शासन", en: "Digital Gov" },
    integrity: { ne: "सुशासन र भ्रष्टाचार", en: "Integrity" },
    procurement: { ne: "खरिद र परियोजना", en: "Procurement" },
    economy: { ne: "अर्थतन्त्र र लगानी", en: "Economy" },
    energy: { ne: "ऊर्जा तथा जलस्रोत", en: "Energy & Water" },
    revenue: { ne: "राजस्व सुधार", en: "Revenue" },
    human: { ne: "मानव विकास", en: "Human Dev" },
    agri: { ne: "कृषि र पूर्वाधार", en: "Agri & Infra" },
    strategic: { ne: "रणनीतिक प्राथमिकता", en: "Strategic Items" }
};

const pointsData = [
    { id: 1, sector: "unity", duration: 7, titleNe: "निर्वाचन सफलतापूर्वक सम्पन्न गराउने पक्षलाई आभार प्रकट गर्ने", titleEn: "Expressing gratitude to election stakeholders", descNe: "२०८२ फागुन २१ को निर्वाचन सफल गराउने सुरक्षा निकाय, निर्वाचन आयोग र कर्मचारीलाई धन्यवाद ज्ञापन।", descEn: "Official formal appreciation for the security agencies, EC, and staff involved in successful Feb 2026 elections." },
    { id: 2, sector: "unity", duration: 7, titleNe: "नतिजामा आधारित शासकीय प्रवन्ध (Delivery-Based Governance) लागू गर्ने", titleEn: "Institutionalize Delivery-Based Governance", descNe: "मन्त्रालयहरूले ७ दिनभित्र १० प्रमुख कार्यको कार्ययोजना तयार गरी कार्यान्वयन सुरु गर्ने।", descEn: "Ministries to finalize action plans for top 10 delivery items within 7 days for immediate execution." },
    { id: 3, sector: "unity", duration: 100, titleNe: "\"राष्ट्रिय प्रतिबद्धता\" तयार गर्ने एवं साझा स्वामित्व स्थापित गर्ने", titleEn: "Draft \"National Commitment\" for Shared Ownership", descNe: "निर्वाचन घोषणापत्रहरूको संश्लेषण गरी शासकीय सुधारको साझा 'राष्ट्रिय प्रतिबद्धता' निर्माण।", descEn: "Synthesizing party manifestos into a unified 'National Commitment' document for shared governance ownership." },
    { id: 4, sector: "unity", duration: 7, titleNe: "संविधान संशोधनसम्बन्धी \"बहस पत्र\" तयार गर्न कार्यदल गठन", titleEn: "Task Force for Constitutional Amendment Discussion Paper", descNe: "निर्वाचन प्रणाली र संस्थागत सुधारका आधारभूत पक्ष समेटिएको बहस पत्र ७ दिनमा तयार गर्ने।", descEn: "Setting up a task force to prepare a strategic high-level paper on election and institutional reforms." },
    { id: 5, sector: "unity", duration: 15, titleNe: "राज्यका तर्फबाट औपचारिक क्षमायाचनासहित सुधार कार्यक्रम", titleEn: "State Apology and Inclusion Reform Package", descNe: "ऐतिहासिक रूपमा उत्पीडित र बहिष्कृत समुदायलाई राज्यका तर्फबाट सम्बोधन र सुधारका योजना।", descEn: "Acknowledging historical injustices with a formal apology and introducing targeted inclusion reforms." },
    { id: 6, sector: "unity", duration: 100, titleNe: "जेन-जी (Gen Z) आन्दोलन प्रभावितलाई एकीकृत पुनर्स्थापना प्याकेज", titleEn: "Gen-Z Movement Relief & Rehabilitation Package", descNe: "आन्दोलनका शहीद परिवार र घाइतेहरूका लागि रोजगारी र सीप विकासको विशेष कार्यक्रम।", descEn: "A dedicated package providing employment and skills training for families of martyrs and injured youths." },
    { id: 7, sector: "unity", duration: 7, titleNe: "भाद्र २४ को घटना छानबिन गर्न उच्चस्तरीय समिति गठन", titleEn: "High-level Probe Committee for Sept 9 Incident", descNe: "घटनाको सत्यतथ्य छानबिन गरी जिम्मेवार पक्ष पहिचान र कारबाहीको सिफारिस गर्ने।", descEn: "A committee to investigate the truth of the Sept 9 incident and recommend legal actions against those responsible." },
    { id: 8, sector: "unity", duration: 30, titleNe: "विभिन्न आयोगका प्रतिवेदनहरू कार्यान्वयन प्रक्रिया सुरु गर्ने", titleEn: "Execution of Past Investigative Commission Reports", descNe: "विभिन्न समयमा गठित आयोगका कार्यान्वयन नभएका सिफारिसहरूलाई प्रशासनिक प्रक्रियामा लैजाने।", descEn: "Starting the administrative process to implement long-stalled recommendations from past commissions." },
    { id: 9, sector: "admin", duration: 30, titleNe: "सङ्घीय मन्त्रालयको सङ्ख्या १७ कायम गर्ने", titleEn: "Restructuring Federal Ministries to 17", descNe: "प्रशासनिक खर्च कटौती र छरितो कार्यसम्पादनका लागि मन्त्रालयको संख्या १७ मा ल्याउने।", descEn: "Downsizing federal ministries to 17 to reduce overheads and improve cabinet efficiency." },
    { id: 10, sector: "admin", duration: 30, titleNe: "सेवा प्रवाहमा बहु-स्वीकृति तहलाई बढीमा तीन तहमा सीमित गर्ने", titleEn: "Limiting Service Approval Layers to Max Three", descNe: "निर्णय प्रक्रियामा हुने ढिलासुस्ती हटाउन बिजनेश प्रोसेस रि-इन्जिनियरिङ (BPR) लागू गर्ने।", descEn: "Simplifying internal bureaucracy by limiting approval steps to three for faster service delivery." },
    { id: 11, sector: "admin", duration: 30, titleNe: "अनुत्पादक बोर्ड, समिति र संस्थागत संरचना खारेज वा पुनर्संरचना", titleEn: "Dissolving Unproductive Public Boards & Entities", descNe: "राज्यकोषमा अनावश्यक भार पार्ने संरचनाहरूको खारेजी वा गाभ्ने प्रक्रिया।", descEn: "Identifying and closing redundant government boards to optimize the national budget." },
    { id: 12, sector: "admin", duration: 45, titleNe: "सङ्घीय निजामती सेवा विधेयक तर्जुमा गर्ने", titleEn: "Drafting the Federal Civil Service Bill", descNe: "सङ्घीयता अनुकूलको निजामती प्रशासनका लागि नयाँ कानूनको मस्यौदा तयार गर्ने।", descEn: "Preparing the legislative draft to align the civil service with the federal governing structure." },
    { id: 13, sector: "admin", duration: 100, titleNe: "कर्मचारी आचारसंहिताको अक्षरशः कार्यान्वयन गर्ने", titleEn: "Strict Enforcement of Employee Code of Conduct", descNe: "भ्रष्टाचार र अनुशासनहीनता विरुद्ध शून्य सहनशीलता नीति।", descEn: "Enforcing zero tolerance patterns for unethical conduct and delays in public service." },
    { id: 14, sector: "admin", duration: 15, titleNe: "सङ्गठन तथा व्यवस्थापन सर्वेक्षणको राष्ट्रिय मापदण्ड तर्जुमा", titleEn: "National O&M Standards for Gov Structures", descNe: "दरबन्दी र संरचना निर्धारणका लागि सबै तहका सरकारमा साझा मापदण्ड।", descEn: "Standardizing Organization & Management surveys for all layers of government." },
    { id: 15, sector: "admin", duration: 100, titleNe: "शिक्षकको अवकाश सुविधा प्रदेशस्तरबाटै व्यवस्थापन", titleEn: "Teachers' Pension Management at Provincial Level", descNe: "शिक्षकको पेन्सन र अवकाश सुविधा प्रदेशको शिक्षा निर्देशनालयबाटै गर्ने।", descEn: "Decentralizing teacher records and retirement benefits to provincial levels." },
    { id: 16, sector: "admin", duration: 45, titleNe: "कार्यसम्पादन सूचक (KPI) र उत्तरदायित्त्व प्रणाली लागू", titleEn: "KPI-based Performance Monitoring System", descNe: "हरेक पदको नतिजा मापनका लागि वस्तुगत सूचकहरू कार्यान्वयन।", descEn: "Implementing objective key performance indicators for every post to ensure accountabilty." },
    { id: 85, sector: "human", duration: 30, titleNe: "१०% निःशुल्क शय्या र Free Health Portal निर्माण", titleEn: "10% Free Hospital Beds & Health Portal", descNe: "विपन्नका लागि निःशुल्क उपचारको ट्र्याकिङ गर्ने पोर्टल सञ्चालन।", descEn: "Launching a portal to monitor 10% free bed allocations for underprivileged citizens in hospitals." },
    { id: 91, sector: "agri", duration: 1000, titleNe: "भूमिहीन सुकुम्बासी समस्याको १००० दिनभित्र समाधान", titleEn: "Resolving Landless Squatters Issue in 1000 Days", descNe: "सुकुम्बासी र वास्तविक अव्यवस्थित बसोबासीलाई जग्गा धनी प्रमाणपूर्जा वितरण।", descEn: "Distributing land ownership certificates to genuine landless squatters within the term." },
    { id: 99, sector: "strategic", duration: 100, titleNe: "सहकारीका साना बचतकर्ताहरूको बचत फिर्ता सुरु", titleEn: "Cooperatives Savings Refund for Small Savers", descNe: "संकटमा परेका सहकारीका साना निक्षेपकर्ताको रकम फिर्ता गराउने।", descEn: "Initiating the process to refund hard-earned savings to small depositors in troubled co-ops." }
];

// Populate 100 points
for (let i = 1; i <= 100; i++) {
    if (!pointsData.find(p => p.id === i)) {
        const sKeys = Object.keys(sectors).filter(k => k !== 'all');
        const s = sKeys[i % sKeys.length];
        pointsData.push({
            id: i, sector: s, duration: 30,
            titleNe: `शासकीय सुधार सम्बन्धी रणनीतिक कार्यसूची बुँदा नं. ${i}`,
            titleEn: `Governance Reform Strategic Item #${i}`,
            descNe: `यस बुँदाले शासकीय प्रणालीको पारदर्शिता र नागरिक उत्तरदायित्वमा थप सुधार ल्याउनेछ।`,
            descEn: `This commitment aims to strengthen systemic transparency and public accountability.`
        });
    }
}
pointsData.sort((a, b) => a.id - b.id);

let activeSector = 'all';
let filters = { search: '', status: 'all', duration: 'all' };

function setLang(lang) {
    currentLang = lang;
    document.getElementById('btn-ne').classList.toggle('active', lang === 'ne');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    updateUI();
}

function translateNum(num) {
    if (currentLang !== 'ne') return num;
    const neDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return num.toString().split('').map(d => neDigits[d] || d).join('');
}

function updateGlobalTimer() {
    const now = new Date();
    const diff = goalDate - now;
    const t = translations[currentLang];
    if (diff <= 0) {
        document.getElementById('val-remaining').innerText = currentLang === 'ne' ? "कार्यकाल समाप्त" : "TERM COMPLETED";
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    
    let str = `${days}D : ${hrs}H : ${mins}M : ${secs}S`;
    if (currentLang === 'ne') {
        str = `${translateNum(days)} ${t.lblDays} : ${translateNum(hrs)} ${t.lblHrs} : ${translateNum(mins)} ${t.lblMins}`;
    } else {
        str = `${days} Days : ${hrs} Hours : ${mins} Mins`;
    }
    document.getElementById('val-remaining').innerText = str;
}

function calculateProgress(p) {
    const now = new Date();
    const daysPassed = (now - startDate) / (1000 * 60 * 60 * 24);
    const progress = Math.min(100, Math.floor((daysPassed / p.duration) * 100));
    return {
        percent: progress,
        status: progress >= 100 ? 'Completed' : 'In Progress',
        timeLeft: Math.max(0, Math.ceil(p.duration - daysPassed))
    };
}

function updateUI() {
    const t = translations[currentLang];
    document.getElementById('ui-gov-sub').innerText = t.govSub;
    document.getElementById('ui-main-header').innerText = t.mainHeader;
    document.getElementById('ui-tagline').innerText = t.tagline;
    document.getElementById('lbl-days').innerText = t.lblRemaining;
    document.getElementById('lbl-ongoing').innerText = t.lblOngoing;
    document.getElementById('lbl-done').innerText = t.lblDone;
    document.getElementById('lbl-search').innerText = t.lblSearch;
    document.getElementById('search-box').placeholder = t.placeholderSearch;
    document.getElementById('lbl-status-sel').innerText = t.lblStatusSel;
    document.getElementById('lbl-deadline-sel').innerText = t.lblDeadlineSel;
    document.getElementById('lbl-categories').innerText = t.lblCategories;
    
    const statusSelect = document.getElementById('status-select');
    statusSelect.options[0].text = t.allStatuses;
    statusSelect.options[1].text = t.statusInProgress;
    statusSelect.options[2].text = t.statusCompleted;

    document.getElementById('ui-footer-desc').innerText = t.footerDesc;
    document.getElementById('ui-footer-gov-links').innerText = t.govLinks;
    document.getElementById('ui-footer-citizen').innerText = t.citizenInfo;
    document.getElementById('ui-footer-contact').innerText = t.contactTitle;

    renderSectorPills();
    renderPoints();
    renderStats();
    updateGlobalTimer();
}

function renderStats() {
    let done = 0; let working = 0;
    pointsData.forEach(p => {
        const prog = calculateProgress(p);
        if (prog.status === 'Completed') done++;
        else working++;
    });
    document.getElementById('val-ongoing').innerText = translateNum(working);
    document.getElementById('val-done').innerText = translateNum(done);
}

function renderSectorPills() {
    const box = document.getElementById('category-pills');
    box.innerHTML = '';
    
    Object.keys(sectors).forEach(k => {
        const count = pointsData.filter(p => k === 'all' || p.sector === k).length;
        const pill = document.createElement('div');
        pill.className = `pill ${activeSector === k ? 'active' : ''}`;
        pill.innerHTML = `
            <span>${sectors[k][currentLang]}</span>
            <span class="pill-count">${translateNum(count)}</span>
        `;
        pill.onclick = () => { activeSector = k; updateUI(); };
        box.appendChild(pill);
    });
}

function renderPoints() {
    const grid = document.getElementById('point-cards');
    grid.innerHTML = '';
    
    const filtered = pointsData.filter(p => {
        const prog = calculateProgress(p);
        const searchLow = filters.search.toLowerCase();
        const matchesSearch = p.id.toString() === searchLow || p.titleEn.toLowerCase().includes(searchLow) || p.titleNe.includes(searchLow);
        const matchesSector = activeSector === 'all' || p.sector === activeSector;
        const matchesStatus = filters.status === 'all' || prog.status === filters.status;
        const matchesDead = filters.duration === 'all' || p.duration.toString() === filters.duration;
        return matchesSearch && matchesSector && matchesStatus && matchesDead;
    });

    filtered.forEach(p => {
        const prog = calculateProgress(p);
        const card = document.createElement('div');
        card.className = 'card';
        const stClass = prog.status === 'Completed' ? 'status-done' : 'status-in-progress';
        const t = translations[currentLang];
        const stText = prog.status === 'Completed' ? t.statusCompleted : t.statusInProgress;
        
        card.innerHTML = `
            <div class="card-num">#${p.id.toString().padStart(3, '0')}</div>
            <div class="status-badge ${stClass}">${stText}</div>
            <h3 class="card-title">${currentLang === 'ne' ? p.titleNe : p.titleEn}</h3>
            <div class="card-content">${currentLang === 'ne' ? p.descNe : p.descEn}</div>
            <div class="card-meta">
                <div class="progress-header">
                    <span>${t.totalDays}: ${translateNum(p.duration)} ${t.lblDays}</span>
                    <span>${translateNum(prog.timeLeft)} ${t.daysLeft}</span>
                </div>
                <div class="progress-rail">
                    <div class="progress-fill" style="width: ${prog.percent}%;"></div>
                </div>
            </div>
        `;
        card.onclick = () => showDetail(p);
        grid.appendChild(card);
    });
}

function showDetail(p) {
    const prog = calculateProgress(p);
    const m = document.getElementById('modal-overlay');
    const box = document.getElementById('modal-data');
    const t = translations[currentLang];
    
    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    const statusLabel = prog.status === 'Completed' ? t.statusCompleted : t.statusInProgress;
    const statusClass = prog.status === 'Completed' ? 'status-done' : 'status-in-progress';

    box.innerHTML = `
        <div style="border-bottom:2px solid #f1f5f9; padding-bottom:25px; margin-bottom:30px;">
            <div class="status-badge ${statusClass}">${statusLabel}</div>
            <h1 style="font-size:2.2rem; font-weight:800; color:var(--gov-blue); line-height:1.2; margin-top:15px;">#${p.id.toString().padStart(3, '0')} - ${currentLang === 'ne' ? p.titleNe : p.titleEn}</h1>
            <div style="display:flex; gap:20px; margin-top:15px; font-weight:700; color:#64748b; text-transform:uppercase; font-size:0.8rem;">
                <span>${t.lblSector} ${sectors[p.sector][currentLang]}</span>
                <span>${t.lblDeadline} ${translateNum(p.duration)} ${t.lblDays}</span>
            </div>
        </div>
        
        <div style="margin-bottom:35px;">
            <h4 style="color:var(--gov-red); font-weight:800; text-transform:uppercase; font-size:0.85rem; margin-bottom:12px;">${t.detailedContext}</h4>
            <p style="font-size:1.15rem; color:#1e293b; font-weight:500; line-height:1.6; background:#f8fafc; padding:25px; border-radius:10px; border:1px solid #e2e8f0;">${currentLang === 'ne' ? p.descNe : p.descEn}</p>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:25px;">
            <div style="background:#f1f5f9; padding:25px; border-radius:12px;">
                <h4 style="font-weight:800; text-transform:uppercase; color:var(--gov-blue); font-size:0.8rem; margin-bottom:12px;">${t.whatIsThis}</h4>
                <p style="font-size:1rem; line-height:1.5; color:#334155;">${t.genericConcept}</p>
            </div>
            <div style="background:#f0fdf4; padding:25px; border-radius:12px; border-left:5px solid #22c55e;">
                <h4 style="font-weight:800; text-transform:uppercase; color:#166534; font-size:0.8rem; margin-bottom:12px;">${t.impactLabel}</h4>
                <p style="font-size:1rem; line-height:1.5; color:#334155;">${t.genericImpact}</p>
            </div>
        </div>

        <div style="margin-top:35px; padding-top:30px; border-top:1px solid #f1f5f9;">
             <h4 style="font-weight:800; text-transform:uppercase; color:var(--text-sub); font-size:0.8rem; margin-bottom:15px;">${t.actionPlan}</h4>
             <ul style="list-style: none; display:flex; flex-direction:column; gap:10px; font-weight:600; font-size:0.95rem;">
                <li style="display:flex; align-items:center; gap:10px;"><i class="fas fa-check-circle" style="color:#22c55e;"></i> ${t.actionPoints[0]}</li>
                <li style="display:flex; align-items:center; gap:10px;"><i class="fas fa-check-circle" style="color:#22c55e;"></i> ${t.actionPoints[1]}</li>
                <li style="display:flex; align-items:center; gap:10px;"><i class="fas fa-clock" style="color:var(--gov-blue);"></i> ${t.actionPoints[2]}</li>
             </ul>
        </div>
    `;
}

document.getElementById('close-modal').onclick = () => {
    document.getElementById('modal-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
};

document.getElementById('search-box').addEventListener('input', (e) => {
    filters.search = e.target.value;
    renderPoints();
});

document.getElementById('status-select').addEventListener('change', (e) => {
    filters.status = e.target.value;
    renderPoints();
});

document.getElementById('deadline-select').addEventListener('change', (e) => {
    filters.duration = e.target.value;
    renderPoints();
});

setInterval(updateGlobalTimer, 1000);
updateUI();
