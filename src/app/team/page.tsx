/* const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
 */

import Image from "next/image";
import nextConfig from "@/../next.config";
  interface LinkType {
    name: string;
    href: string;
  }
  const links:LinkType[] = [];

  const coordinator = { name: 'Angelo Furfaro', role: 'Associate Professor', description: '', image: nextConfig.basePath+'/team_imgs/AngeloFurfaro.png'}
    

  const peoples = [
    { name: 'Carmelo Felicetti', role: 'Assistant Professor', description: '', image: nextConfig.basePath+'/team_imgs/CarmeloFelicetti.jpeg'},
    { name: 'Francesco Blefari', role: 'PhD Student', description: '', image: nextConfig.basePath+'/team_imgs/FrancescoBlefari.jpeg'},
    { name: 'Francesco Aurelio Pironti', role: 'PhD Student', description: '', image: nextConfig.basePath+'/team_imgs/FrancescoAurelioPironti.jpeg'},
    { name: 'Francesco Romeo', role: 'PhD Student', description: '', image: nextConfig.basePath+'/team_imgs/FrancescoRomeo.jpeg'},
    
  ]
  
  export default function page() {
    console.log(nextConfig)
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 h-screen py-24 sm:py-32">
        <Image
          alt=""
          fill={true}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Chi siamo</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Il laboratorio di Cyber Security è coordinato dal prof. Angelo Furfaro ed è situato presso il Dipartimento di ingegneria Informatica, Modellistica, Elettronica e Sistemistica dell&apos;Università della Calabria.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 justify-centergap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {
              links.length > 0 && links.map((link) => (
                    <a key={link.name} href={link.href}>
                      {link.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                  ))
              }
            </div>

            
            <div key={coordinator.name} className="flex flex-col items-center mt-16 sm:mt-20 gap-1">
                <h1 className="text-3xl font-bold self-start">Coordinatore</h1>
                <Image 
                    className="rounded-full h-36 w-36 mt-6" 
                    src={coordinator.image}
                    alt=""
                    width={1000}
                    height={100}
                />
                <dt className="text-base/7 font-semibold text-white">{coordinator.name}</dt>
                <dd className="text-base/7 tracking-tight text-gray-300">{coordinator.role}</dd>    
                
            </div>


            <div className="flex flex-col mt-16 sm:mt-20">
            <h1 className="text-3xl font-bold self-start">Membri</h1>    
            <div className="flex flex-row items-center justify-evenly flex-wrap mt-6">
            {peoples.map((member) => (
              <div key={member.name} className="px-6">
                  <Image 
                    className="rounded-full h-36 w-36" 
                    src={member.image}
                    alt=""
                    width={1000}
                    height={100}
                  />
                  <dt className="text-base/7 font-semibold text-white">{member.name}</dt>
                  <dd className="text-base/7 tracking-tight text-gray-300">{member.role}</dd>
              </div>
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  