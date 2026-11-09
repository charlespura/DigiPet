import { lazy, Suspense, useState } from 'react';
import { ArrowUpRight, PawPrint } from 'lucide-react';
import QRCode from 'qrcode';
import { Header } from './components/Header';
import { PetSelector } from './components/PetSelector';
import { PetDetailsForm } from './components/PetDetailsForm';
import { TagPreview } from './components/TagPreview';
const ScannerPanel = lazy(() => import('./components/ScannerPanel').then(module => ({ default: module.ScannerPanel })));
import { Gallery } from './components/Gallery';
import { HelpPanel } from './components/HelpPanel';
import { pets } from './data';
import type { PetFormData, PetRecord, PetType, Tab } from './types';
export default function App() {
 const [tab,setTab]=useState<Tab>('generator');const [pet,setPet]=useState<PetType>('dog');const [breed,setBreed]=useState(pets[0].breeds[0].name);const [custom,setCustom]=useState(false);
 const [form,setForm]=useState<PetFormData>({petName:'',owner:'',phone:'',chip:''});const [records,setRecords]=useState<PetRecord[]>([]);const [current,setCurrent]=useState<PetRecord|null>(null);const [busy,setBusy]=useState(false);const [error,setError]=useState('');
 function selectPet(type:PetType) {setPet(type);setBreed(custom?'':pets.find(p=>p.id===type)!.breeds[0].name);}
 function selectCustom(value:boolean) {setCustom(value);setBreed(value?'':pets.find(p=>p.id===pet)!.breeds[0].name);}
 async function generate() {
  if(busy)return;
  if(!breed.trim()||!form.petName.trim()||!form.owner.trim()||!form.phone.trim()){setError('Please enter a breed, pet name, owner name, and phone number.');return;}
  if(!/^[+\d\s().-]+$/.test(form.phone)||form.phone.replace(/\D/g,'').length<7||form.phone.replace(/\D/g,'').length>15){setError('Enter a valid phone number with 7–15 digits, including the country code.');return;}
  setBusy(true);setError('');
  try {const definition=pets.find(p=>p.id===pet)!;const data={petType:pet,petName:form.petName.trim(),breed:breed.trim(),owner:form.owner.trim(),phone:form.phone.trim(),chip:form.chip.trim(),trivia:custom?definition.care:definition.breeds.find(b=>b.name===breed)!.trivia,timestamp:new Date().toISOString()};const qrUrl=await QRCode.toDataURL(JSON.stringify(data),{width:800,margin:4,errorCorrectionLevel:'M',color:{dark:'#142c24',light:'#ffffff'}});const record:PetRecord={...data,id:crypto.randomUUID(),qrUrl};setCurrent(record);setRecords(previous=>[record,...previous]);}catch{setError('The tag could not be created. Please try again.');}finally{setBusy(false);}
 }
 return <><Header active={tab} onNavigate={setTab}/><main id="main" className="mx-auto max-w-[1440px] px-4 py-9 sm:px-6 sm:py-12 lg:px-8"><div className="mb-9 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow mb-3">A little tag. A way home.</p><h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{tab==='generator'?'For the ones who mean everything.':tab==='scanner'?'A scan. A connection.':tab==='gallery'?'Their tags. Your peace of mind.':'Here to help you both.'}</h1><p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{tab==='generator'?'Create a personal QR tag that keeps your companion connected to you.':tab==='scanner'?'Read a pet tag and help a companion find their person.':tab==='gallery'?'Keep your pet identification codes close at hand.':'Everything you need to create, save, and scan a pet tag.'}</p></div>{tab==='generator'&&<button onClick={()=>setTab('help')} className="flex items-center gap-2 rounded text-sm font-semibold text-forest hover:underline">How it works <ArrowUpRight size={17}/></button>}</div>{tab==='generator'?<div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)_minmax(0,1fr)]"><PetSelector selected={pet} breed={breed} custom={custom} onPet={selectPet} onBreed={setBreed} onCustom={selectCustom}/><PetDetailsForm value={form} onChange={setForm} onSubmit={()=>void generate()} busy={busy} error={error}/><div className="lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-lg xl:col-span-1"><TagPreview record={current} onScan={()=>setTab('scanner')}/></div></div>:tab==='scanner'?<Suspense fallback={<p role="status" className="panel p-8 text-center">Loading scanner…</p>}><ScannerPanel/></Suspense>:tab==='gallery'?<Gallery records={records} onCreate={()=>setTab('generator')} onDelete={id=>{setRecords(previous=>previous.filter(record=>record.id!==id));if(current?.id===id)setCurrent(null);}}/>:<HelpPanel/>}</main><footer className="mx-auto mt-3 flex max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-slate-200 px-4 py-7 text-sm text-slate-600 sm:px-6 lg:px-8"><span className="flex items-center gap-2"><PawPrint size={16} className="text-forest"/> A little care goes a long way.</span><span>PET VAULT · Made for every companion.</span></footer></>;
}

