import { useState } from 'react'
import './index.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import iconSobre from './assets/interrogacao-white.png';
import iconProjetos from './assets/martelo-white.png';
import iconContato from './assets/balao-white.png';

import iconLampada from './assets/lampada-white.png';
import iconDevices from './assets/devices-white.png';
import iconDinamico from './assets/foguete-white.png';
import iconWeb from './assets/web-white.png';
import iconGithub from './assets/icons8-github.svg';


function App() {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className='APP'>
            <header>
                <div className='fixed z-50 mx-4 mt-5 md:mx-5 md:mt-5 w-52 text-white  flex justify-center items-start flex-col' onClick={handleMenu} >
                    <div className='mb-5 cursor-pointer rounded-full bg-rose-500  md:w-20 md:h-20 w-12 h-12 flex flex-col hover:bg-rose-600 text-center justify-center items-center  border-2 md:border-0 border-white'>
                        <span className='rounded-full mb-1 w-6 sm:w-10  h-1 sm:h-2 bg-white'></span>
                        <span className='rounded-full mb-1 w-6 sm:w-10 h-1 sm:h-2 bg-white'></span>
                        <span className='rounded-full w-6 sm:w-10 h-1 sm:h-2 bg-white'></span>
                    </div>
                    <div className={menu === true? '': 'menu-closed'} >
                        <nav className='flex flex-col  font-bold'>
                            <a href="#sobre" className=' mb-5  bg-rose-500 hover:bg-black hover:text-rose-500  rounded-full w- flex justify-center items-center min-w-[11rem] transition-all duration-300 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] hover:shadow-rose-500 hover:border-rose-500 border-b-4 border-b-black'>
                                <img className='w-11 h-10 mx-3  p-1 bg-' src={iconSobre} alt="" />
                                <div className='flex-1 text-2xl text-start'>Sobre</div>
                            </a>
                            <a href="#projetos" className=' bg-rose-500 hover:bg-black hover:text-rose-500 rounded-full flex justify-center items-center min-w-[11rem] transition-all duration-300 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] hover:shadow-rose-500 hover:border-rose-500 border-b-4 border-b-black'>
                                <img className='w-11 h-10 mx-3 p-1 bg-' src={iconProjetos} alt="" />
                                <div className='flex-1 text-2xl text-start'>Projetos</div>
                            </a>
                            <a href="#contato" className='mt-5  bg-rose-500 hover:bg-black hover:text-rose-500 rounded-full flex justify-center items-center  min-w-[11rem] transition-all duration-300 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] hover:shadow-rose-500 hover:border-rose-500 border-b-4 border-b-black'>
                                <img className='w-11 h-10 mx-3 p-1 bg-' src={iconContato} alt="" />
                                <div className='flex-1 text-2xl text-start'>Contato</div>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
            <body className='bg-slate-800'>
                <div  id='inicio' className='border-b-4 border-slate-500'>
                    <div className='z-30 h-screen w-[100%] bg-transparent flex absolute'>
                        <div className='Container text-white flex flex-col align-middle'>
                            <h1 className="sm:text-4xl text-3xl text-center">
                                Olá, eu sou <span className='text-rose-500'>Gabriel Lucas</span>.
                            </h1>
                            <h1 className="sm:text-4xl text-3xl text-center ">
                                Um desenvolvedor web Front-end.
                            </h1>
                            <a href="#sobre" className='border-2 m-auto mt-5 text-xl sm:w-3/12 border-white p-2 font-bold text-center hover:bg-white hover:text-black transition ease-in duration-200'>Conhecer meu trabalho <span className='ml-2'>►</span></a>
                        </div>
                    </div>
                    <div className="area" >
                        <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                    </div>
                </div>

                <div id='sobre' className='Container text-white mb-32'>
                    <div className='flex flex-col mb-20'>
                        <h1 className='flex-1 text-4xl pt-10 mb-3 text-center font-bold'>Sobre</h1>
                        <div className='border-b-4 w-14 mx-[auto]' ></div>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn" offset={1}>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 mb-36'>
                            <div className='flex flex-col '>
                                <div className='w-32 h-28 mx-[auto] p-3 bg-rose-500 shape-outer hexagon'>
                                    <img className='p-4 w-28 h-24 shape-inner hexagon' src={iconDevices} alt="" />
                                </div>
                                <h2 className='mx-[auto] text-white font-bold text-xl mt-3 mb-1'>Responsivo</h2>
                                <span className='text-center text-zinc-300 text-md'>Meus layouts funcionam em qualquer dispositivo, grande ou pequeno.</span>
                            </div>

                            <div className='flex flex-col '>
                                <div className='w-32 h-28 mx-[auto] p-3 bg-rose-500 shape-outer hexagon'>
                                    <img className='p-4 w-28  h-24 shape-inner hexagon' src={iconLampada} alt="" />
                                </div>
                                <h2 className='mx-[auto] text-white font-bold text-xl mt-3 mb-1'>Intuitivo</h2>
                                <span className='text-center text-zinc-300 text-md'>Preferência para uma UI/UX intuitiva e fácil de se usar.</span>
                            </div>

                            <div className='flex flex-col '>
                                <div className='w-32 h-28 mx-[auto] p-3 bg-rose-500 shape-outer hexagon'>
                                    <img className='p-4 w-22 h-24 shape-inner hexagon' src={iconDinamico} alt="" />
                                </div>
                                <h2 className='mx-[auto] text-white font-bold text-xl mt-3 mb-1'>Dinâmico</h2>
                                <span className='text-center text-zinc-300 text-md'>Sites não precisam ser estáticos. Eu gosto de criar páginas com vida.</span>
                            </div>
                        </div>

                        <div className='grid sm:grid-cols-2'>
                            <div className='flex flex-col justify-center items-center md:pr-8'>
                                <div className='w-60 h-60 sm:w-80 sm:h-72 shape-outer hexagon bg-rose-500'>
                                    <div className='profile shape-inner w-48 h-48 sm:w-64 sm:h-64 hexagon'></div>
                                </div>
                                <h2 className='text-white font-bold text-2xl mt-3 mb-1'>Quem é você ?</h2>
                                <span className='text-center text-zinc-200 text-md'>Eu sou desenvolvedor front-end de Patos de Minas, MG.</span>
                                <span className='text-center text-zinc-200 text-md'>Entusiasta de tecnologia que adora criar interfaces interativas e simples de se usar.</span>
                            </div>
                            <div className='sm:mt-0 mt-16'>
                                <div className='flex flex-col font-semibold text-white' >
                                    <div className='flex items-center mb-5 '>
                                        <span className='bg-rose-500  w-28 text-center text-lg '>CSS</span>
                                        <div className='flex-1 font-bold skils-90 text-end text-black text-lg '>90%</div>
                                    </div>
                                    <div className='flex items-center mb-5 '>
                                        <span className='bg-rose-500  w-28 text-center text-lg '>HTML</span>
                                        <div className='flex-1 font-bold skils-90 text-end text-black text-lg '>90%</div>
                                    </div>
                                    <div className='flex items-center mb-5 '>
                                        <span className='bg-rose-500 w-28 text-center text-lg '>JavaScript</span>
                                        <div className='flex-1 font-bold skils-80 text-end text-black text-lg '>80%</div>
                                    </div>
                                    <div className='flex items-center mb-5 '>
                                        <span className='bg-rose-500 w-28 text-center text-lg '>React</span>
                                        <div className='flex-1 font-bold skils-80 text-end text-black text-lg '>80%</div>
                                    </div>
                                    <div className='flex items-center mb-5 '>
                                        <span className='bg-rose-500 w-28 text-center text-lg'>NodeJS</span>
                                        <div className='flex-1 font-bold skils-70 text-end text-black text-lg '>70%</div>
                                    </div>
                                    <div className='flex  items-center mb-5 '>
                                        <span className='bg-rose-500 w-28 text-center text-lg'>Tailwind</span>
                                        <div className='flex-1 font-bold skils-90  text-end text-black text-lg '>90%</div>
                                    </div>
                                    <div className='flex  items-center mb-5 '>
                                        <span className='bg-rose-500 w-28 text-center text-lg'>Bootstrap</span>
                                        <div className='flex-1 font-bold skils-80  text-end text-black text-lg '>80%</div>
                                    </div>
                                    <div className='flex  items-center mb-5 '>
                                        <div className='flex-1 flex justify-around  font-bold bg-rose-500  text-center text-lg'>
                                            <p>MySQL</p>
                                            <p>PostgreSQL</p>
                                        </div>
                                    </div>
                                    <div className='flex  items-center mb-5 '>
                                        <div className='flex-1 flex justify-around  font-bold bg-rose-500  text-center text-lg'>
                                            <p>GIT</p>
                                            <p>GitHub</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div id='projetos' className='Container text-white pb-10'>
                    <div className='flex flex-col mb-20'>
                        <h1 className='flex-1 text-4xl pt-10 mb-3 text-center font-bold'>Projetos</h1>
                        <div className='border-b-4 w-14 mx-[auto]' ></div>
                    </div>

                    <AnimationOnScroll animateIn="animate__fadeIn" offset={1}>
                        <div className='grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10'>
<div className='group flex flex-col justify-end bg-slate-500 h-80 w-80 rounded-2xl projeto memoria cursor-pointer  shadow-lg shadow-slate-700 hover:shadow-rose-700'>
                                <div className='bg-neutral-900 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in rounded-b-2xl -mb-[2px] cursor-default'>
                                    <div className='pt-1'>
                                        <h2 className='font-bold text-xl'>DevMemory</h2>
                                        <p className='text-md sm:text-sm mt-1'>Jogo da memoria que conta o tempo e o número de tentativas até ser completado, além de cada partida ser aleatória.</p>
                                    </div>
                                    <div className='flex invisible group-hover:visible mt-2 items-center border-t-2 pt-1 pb-1'>
                                        <a href="https://gabriel-jogodamemoria.onrender.com/" target='_blank' className='bg-clip-content w-14 h-12 mr-1'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconWeb} alt="" /> </a>
                                        <a href="https://github.com/GabrielLucasPS/react-memoria" target='_blank' className='bg-clip-content w-14 h-12 mr-3'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconGithub} alt="" /> </a>
                                        <h3 className='text-cyan-500 font-bold mr-3'>React</h3>
                                        <h3 className='text-blue-600 font-bold'>TypeScript</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='group flex flex-col justify-end bg-slate-500 h-80 w-80 rounded-2xl projeto imc cursor-pointer shadow-lg shadow-slate-700 hover:shadow-rose-700'>
                                <div className='bg-neutral-900 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in rounded-b-2xl -mb-[2px] cursor-default'>
                                    <div className='pt-1'>
                                        <h2 className='font-bold text-xl'>Calculadora de IMC</h2>
                                        <p className='text-md sm:text-sm mt-1'>Aplicativo para calcular Índice de Massa Corporal (IMC)</p>
                                    </div>
                                    <div className='flex invisible group-hover:visible mt-2 items-center border-t-2 pt-1 pb-1'>
                                        <a href="https://gabriel-imc.onrender.com/" target='_blank' className='bg-clip-content w-14 h-12 mr-1'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconWeb} alt="" /> </a>
                                        <a href="https://github.com/GabrielLucasPS/react-calc-imc" target='_blank' className='bg-clip-content w-14 h-12 mr-3'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconGithub} alt="" /> </a>
                                        <h3 className='text-cyan-500 font-bold mr-3'>React</h3>
                                        <h3 className='text-blue-600 font-bold'>TypeScript</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='group flex flex-col justify-end bg-slate-500 h-80 w-80 rounded-2xl projeto financeiro cursor-pointer shadow-lg shadow-slate-700 hover:shadow-rose-700'>
                                <div className='bg-neutral-900 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in rounded-b-2xl -mb-[2px] cursor-default'>
                                    <div className='pt-1'>
                                        <h2 className='font-bold text-xl'>Expense tracker</h2>
                                        <p className='text-md sm:text-sm mt-1'>Aplicativo para controlar as despesas do mês de uma pessoa.</p>
                                    </div>
                                    <div className='flex invisible group-hover:visible mt-2 items-center border-t-2 pt-1 pb-1 '>
                                        <a href="https://gabriel-financeiro.onrender.com/" target='_blank' className='bg-clip-content w-14 h-12 mr-1'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconWeb} alt="" /> </a>
                                        <a href="https://github.com/GabrielLucasPS/expense-tracker" target='_blank' className='bg-clip-content w-14 h-12 mr-3'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconGithub} alt="" /> </a>
                                        <h3 className='text-cyan-500 font-bold mr-3'>React</h3>
                                        <h3 className='text-blue-600 font-bold'>TypeScript</h3>
                                    </div>
                                </div>
                            </div>
                            <div  className='group flex flex-col justify-end bg-slate-500 h-80 w-80 rounded-2xl projeto whats cursor-pointer shadow-lg shadow-slate-700 hover:shadow-rose-700'>
                                <div className='bg-neutral-900 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in rounded-b-2xl -mb-[2px] cursor-default'>
                                    <div className='pt-1'>
                                        <h2 className='font-bold text-xl'>Clone do WhatsApp</h2>
                                        <p className='text-sm mt-1'>Projeto de recriação do whatsapp usando React e Firebase.</p>
                                    </div>
                                    <div className='flex invisible group-hover:visible mt-2 items-center border-t-2 pt-1 pb-1'>
                                        <img className='w-14 h-12 mr-1 bg-zinc-500 rounded-xl bg-contain transition-all duration-300 cursor-not-allowed' src={iconWeb} alt="" />
                                        <a href="https://github.com/GabrielLucasPS/Awax" target='_blank' className='bg-clip-content w-14 h-12 mr-3'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconGithub} alt="" /> </a>
                                        <h3 className='text-cyan-500 font-bold mr-3'>React</h3>
                                        <h3 className='text-red-700 font-bold'>Firebase</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='group flex flex-col justify-end bg-slate-500 h-80 w-80 rounded-2xl projeto awax cursor-pointer shadow-lg shadow-slate-700 hover:shadow-rose-700'>
                                <div className='bg-neutral-900 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in rounded-b-2xl -mb-1 cursor-default'>
                                    <div className='pt-1'>
                                        <h2 className='font-bold text-xl'>Projeto AWAX</h2>
                                        <p className='text-md sm:text-sm mt-1'>Recriação de layout da página inicial de uma empresa fictícia.</p>
                                    </div>
                                    <div className='flex invisible group-hover:visible mt-2 items-center border-t-2 pt-1 pb-1'>
                                        <a href="https://gabriellucasps.github.io/Awax/" target='_blank' className='bg-clip-content w-14 h-12 mr-1'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconWeb} alt="" /> </a>
                                        <a href="https://github.com/GabrielLucasPS/Awax" target='_blank' className='bg-clip-content w-14 h-12 mr-3'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconGithub} alt="" /> </a>
                                        <h3 className='text-orange-700 font-bold mr-3'>HTML</h3>
                                        <h3 className='text-yellow-400 font-bold'>JavaScript</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='group flex bg- flex-col justify-end bg-slate-500 h-80 w-80 rounded-2xl projeto canil cursor-pointer shadow-lg shadow-slate-700 hover:shadow-rose-700'>
                                <div className='bg-neutral-900 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in rounded-b-2xl -mb-[2px] cursor-default'>
                                    <div className='pt-1'>
                                        <h2 className='font-bold text-xl'>Projeto Canil</h2>
                                        <p className='text-sm mt-1'>Um site que simula um canil, onde você pode pesquisar entre vários animais por sua raça.</p>
                                    </div>
                                    <div className='flex invisible group-hover:visible mt-2 items-center border-t-2 pt-1 pb-1'>
                                        <a href="https://gabriel-canil.onrender.com/" target='_blank' className='bg-clip-content w-14 h-12 mr-1'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconWeb} alt="" /> </a>
                                        <a href="https://github.com/GabrielLucasPS/nodets-canil" target='_blank' className='bg-clip-content w-14 h-12 mr-3'> <img className='w-14 h-12 hover:bg-rose-500 rounded-xl bg-contain transition-all duration-300' src={iconGithub} alt="" /> </a>
                                        <h3 className='text-green-500 font-bold mr-3'>NodeJs</h3>
                                        <h3 className='text-yellow-400 font-bold'>Mustache</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <div id='contato' className='Container text-white mt-20 '>
                        <div className='flex flex-col mb-20'>
                            <h1 className='flex-1 text-4xl pt-10 mb-3 text-center font-bold'>Contato</h1>
                            <div className='border-b-4 w-14 mx-[auto]' ></div>
                        </div>

                        <AnimationOnScroll animateIn="animate__fadeIn" offset={1}>
                            <div className='flex flex-col items-center font-bold'>
                                <a href="https://www.linkedin.com/in/gabriel-pereira-a82846256/" target='_blank' className='mb-5'>
                                    <div className='flex justify-center items-center w-[350px] h-24 md:h-32 md:w-[450px] bg-rose-500 rounded-lg  md:py-10 md:px-5 mb-10 shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] shadow-black hover:shadow-rose-700   transition-all'>
                                        <h2 className='text-center text-5xl border-b-2'>Linkedin</h2>
                                    </div>
                                </a>
                                <a href="https://github.com/GabrielLucasPS" target='_blank' className='mb-5'>
                                    <div className='flex justify-center items-center w-[350px] h-24 md:h-32 md:w-[450px] bg-rose-500 rounded-lg   md:py-10 md:px-5 mb-10 shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] shadow-black hover:shadow-rose-700  transition-all'>
                                        <h2 className='text-center text-5xl border-b-2'>GitHub</h2>
                                    </div>
                                </a>
                                <h2 className='text-center text-5xl mb-2'>Email:</h2>
                                <div className='flex justify-center items-center w-[350px] h-24 md:h-32 md:w-[450px] bg-rose-500  rounded-lg py-5 px-2  md:py-10 md:px-5 mb-10 shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)]  shadow-black'>
                                    <p className='text-center mt-3 text-3xl border-b-2'>gabrielglpsi@gmail.com</p>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </body>
            
        </div>
    )
}

export default App
