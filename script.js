const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function go(p){document.getElementById(p).scrollIntoView({behavior:'smooth'})}
$$('[data-g]').forEach(e=>e.onclick=()=>go(e.dataset.g));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('nav a').forEach(a=>a.classList.toggle('on',a.dataset.g==e.target.id))}),{rootMargin:'-50% 0px -50% 0px'});
$$('section').forEach(s=>so.observe(s));
const sl=$$('.sl'),dt=$('.dots');let ci=0;
sl.forEach(()=>dt.appendChild(document.createElement('b')));
function sh(){sl.forEach((s,i)=>s.classList.toggle('on',i==ci));[...dt.children].forEach((d,i)=>d.classList.toggle('on',i==ci))}
sh();setInterval(()=>{ci=(ci+1)%sl.length;sh()},5000);
/* wizards */
const N=l=>({t:'n',l}),R=(l,o)=>({t:'r',l,o}),C=(l,o)=>({t:'c',l,o}),F=(l,o)=>({t:'f',l,o}),X=l=>({t:'x',l});
const YN=['نعم','لا'];
const W={
a:{title:'تمديدات كهربائية منزلية',steps:[
[N('مساحة المنزل بالمتر المربع (م²)'),C('المساحة',['لا فكرة لدي عن المساحة حالياً']),
 R('ما حالة المنزل حالياً؟',['جديد على العظم','يحتاج لتمديدات جديدة بالكامل','مبنى قديم يحتاج إعادة تمديد','يحتاج تعديلات أو إضافات فقط']),
 R('ما مستوى التجهيز المطلوب؟',['اقتصادي: مواصفات أساسية وموثوقة مع تقليل التكاليف','متوسط: خيارات ذات جودة أعلى وتوزيع محسّن للمآخذ والنقاط','مميز: مواصفات عالية وحمايات متكاملة وحسب الطلب الخاص'])],
[C('ما الخدمات التي تحتاجها؟ (تحديد متعدد)',['تمديد الإنارة والمفاتيح','تمديد المآخذ الكهربائية','تمديد خطوط المكيفات','تمديد شبكات الإنترنت والتلفاز (Data & TV)','تجهيز لوحة القواطع والحمايات الرئيسية','تمديدات المطبخ والأجهزة عالية الاستطاعة','تنفيذ التمديدات كاملة (تسليم مفتاح)']),
 F('هل تستطيع إرسال صور أو مخططات؟ (PDF, PNG, JPG)','لا أملك صوراً حالياً')]]},
b:{title:'منظومات كهربائية منزلية',steps:[
[N('عدد الغرف'),N('عدد اللمبات الإجمالي'),R('عدد البرادات',['1','2']),N('أو أدخل عدداً آخر للبرادات'),N('عدد التلفازات'),N('عدد المراوح'),N('عدد اللابتوب / الكمبيوتر المكتبي'),
 R('الغسالة',['عادية','إنفرتر','مع مجفف','لا يوجد']),R('مضخة المياه',['نصف حصان','حصان فأكثر','لا يوجد']),R('سخان الماء الكهربائي',YN),R('الفرن الكهربائي / الغلاية',YN),X('تفاصيل إضافية عن الأجهزة عالية الاستطاعة')],
[N('كم مكيفاً تريد تشغيله على المنظومة؟'),R('نوع المكيف',['إنفرتر','عادي','لا أعرف']),R('استطاعة المكيف',['أقل من طن','طن','طن ونصف','طنان','لا أعرف']),N('ساعات التشغيل النهارية'),N('ساعات التشغيل الليلية'),R('هل تريد تشغيل المكيف مع بقية الأجهزة بنفس الوقت؟',YN),F('صورة الملصق الفني (Data Plate) للمكيف','لا أملك صورة حالياً')],
[R('نمط التشغيل الرئيسي',['تشغيل نهاري فقط (أثناء وجود الشمس)','تشغيل نهاري وليلي متوازن','تشغيل معظم الأحيان ليلاً ونهاراً (حاجة لبطاريات بسعة أكبر)']),
 R('عدد ساعات التشغيل ليلاً (على البطاريات)',['أقل من ساعتين','من 2 إلى 4 ساعات','من 4 إلى 6 ساعات','من 6 إلى 8 ساعات','أكثر من 8 ساعات (تغطية ليلية كاملة)'])]]}};
let cur,idx=0,uid=0;
const fld=f=>{const n='q'+uid++;let h=`<div class="f" data-l="${f.l}" data-t="${f.t}"><b>${f.l}</b>`;
if(f.t=='n')h+='<input type="number" min="0" inputmode="numeric">';
if(f.t=='x')h+='<textarea rows="2"></textarea>';
if(f.t=='r'||f.t=='c')h+=f.o.map(o=>`<label class="o"><input type="${f.t=='r'?'radio':'checkbox'}" name="${n}" value="${o}"><span>${o}</span></label>`).join('');
if(f.t=='f')h+=`<input type="file" multiple accept=".pdf,.png,.jpg,.jpeg"><label class="o"><input type="checkbox" value="${f.o}"><span>${f.o}</span></label>`;
return h+'</div>'};
function openW(k){cur=W[k];idx=0;uid=0;$('#wt').textContent=cur.title;
$('#wz').innerHTML=cur.steps.map(s=>`<div class="st">${s.map(fld).join('')}</div>`).join('')+
`<div class="st"><h4 style="margin-bottom:.8rem">ادخل معلوماتك لإرسال الطلب</h4>
<div class="f"><b>الاسم الكامل</b><input type="text" id="cn"></div>
<div class="f"><b>المنطقة</b><select id="cr"><option>دمشق</option><option>ريف دمشق</option></select></div>
<div class="f"><b>رقم الواتساب</b><input type="tel" id="cp" dir="ltr"></div>
<div class="f"><b>ملاحظات إضافية</b><textarea id="cx" rows="3"></textarea></div>
<small>بعد الإرسال سيُفتح واتساب برسالة جاهزة؛ أرفق الصور والمخططات داخل المحادثة إن وجدت.</small></div>`;
$('#ov').classList.add('on');show()}
function cl(){$('#ov').classList.remove('on')}
function show(){const s=$$('#wz .st'),L=s.length-1;s.forEach((e,i)=>e.classList.toggle('on',i==idx));
$('#pb').style.width=((idx+1)/s.length*100)+'%';$('#pv').style.visibility=idx?'visible':'hidden';
$('#nx').textContent=idx==L?'تأكيد وإرسال الطلب':'التالي';$('.md').scrollTop=0}
$('#pv').onclick=()=>{idx--;show()};
$('#nx').onclick=()=>{if(idx<$$('#wz .st').length-1){idx++;show();return}send()};
$$('[data-w]').forEach(b=>b.onclick=()=>openW(b.dataset.w));
$('#ov').onclick=e=>{if(e.target.id=='ov')cl()};
function send(){const nm=$('#cn').value.trim(),ph=$('#cp').value.trim();
if(!nm||!ph){alert('يرجى إدخال الاسم الكامل ورقم الواتساب');return}
let m=`*الاسم الكامل:* ${nm}\n*المنطقة:* ${$('#cr').value}\n*رقم الواتساب:* ${ph}\n\n*نوع الطلب:* ${cur.title}\n`;
$$('#wz .f[data-l]').forEach(f=>{const t=f.dataset.t;let v='';
if(t=='n')v=f.querySelector('input').value;
else if(t=='x')v=f.querySelector('textarea').value.trim();
else if(t=='r'||t=='c')v=[...f.querySelectorAll('input:checked')].map(i=>i.value).join('، ');
else{v=[...f.querySelector('input[type=file]').files].map(x=>x.name).join('، ');const c=f.querySelector('input[type=checkbox]:checked');if(c)v+=(v?'، ':'')+c.value}
if(v)m+=`\n*${f.dataset.l}*\n${v}\n`});
const n=$('#cx').value.trim();if(n)m+=`\n*ملاحظات إضافية*\n${n}`;
wa(m);cl()}

/* offers + contact form */
function wa(t){const u='https://wa.me/963997612653?text='+encodeURIComponent(t);if(!window.open(u,'_blank'))location.href=u}
function cd(){$('#od').classList.remove('on')}
$('#od').onclick=e=>{if(e.target.id=='od')cd()};
$$('.of').forEach(c=>c.onclick=()=>{const pr=c.querySelector('.pr').textContent;
$('#odt').textContent=c.dataset.t;$('#odl').innerHTML=c.querySelector('ul').innerHTML;
$('#odf').innerHTML=c.querySelector('.fd').innerHTML;$('#odp').textContent=pr;
$('#odi').innerHTML=c.querySelector('.img').innerHTML;
$('#odb').onclick=()=>wa('أريد الاستفسار عن: '+c.dataset.t+' ('+pr+')');$('#od').classList.add('on')});
$('#cfb').onclick=()=>{const n=$('#fn').value.trim(),p=$('#fp').value.trim(),m=$('#fm').value.trim();
if(!n||!m){alert('يرجى إدخال الاسم والرسالة');return}
wa(`*الاسم:* ${n}\n*الرقم:* ${p}\n\n${m}`)};

/* offers: show all / less / more (STEP = how many offers per click) */
const cards=$$('.of'),STEP=3;let vis=Math.min(STEP,cards.length);
function upd(){cards.forEach((c,i)=>{if(i<vis){if(c.classList.contains('hid')){c.classList.remove('hid');void c.offsetWidth;c.classList.add('in')}}else c.classList.add('hid')});
$('#bl').disabled=vis<=Math.min(STEP,cards.length);$('#bm').disabled=$('#ba').disabled=vis>=cards.length;
$('#oc').textContent=`يتم عرض ${vis} من ${cards.length} عروض`}
$('#bm').onclick=()=>{vis=Math.min(vis+STEP,cards.length);upd()};
$('#bl').onclick=()=>{vis=Math.max(Math.min(STEP,cards.length),vis-STEP);upd();go('offers')};
$('#ba').onclick=()=>{vis=cards.length;upd()};
upd();

/* hide header when scrolling down, show when scrolling up */
let ly=scrollY;const hd=$('header');
addEventListener('scroll',()=>{const y=scrollY;
if(y>80&&y>ly+4)hd.classList.add('hide');else if(y<ly-4||y<=80)hd.classList.remove('hide');ly=y},{passive:true});

/* mobile: services expand one after the other while scrolling */
(()=>{const sv=$('.sv'),ps=$$('.sv .p'),mq=matchMedia('(max-width:700px)');let tk=0;
function up(){tk=0;let a=-1;
if(mq.matches){const r=sv.getBoundingClientRect(),p=(innerHeight*.5-r.top)/r.height;
if(p>.04&&p<.96)a=p<.5?0:1}
ps.forEach((e,i)=>e.classList.toggle('act',i==a));sv.classList.toggle('ha',a>=0)}
const rq=()=>{if(!tk)tk=requestAnimationFrame(up)};
addEventListener('scroll',rq,{passive:true});addEventListener('resize',rq);up()})();
