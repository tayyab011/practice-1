
import './App.css';
import logo from './img/Logo.png';
import search from './img/Search.svg';
import create from './img/Create.svg';
import message from './img/Message.svg';
import notification from './img/Notification.svg';
import option from './img/Options.svg';
import profilepic from './img/Profile Pic.svg';
import humburgur from './img/Hamburger.svg';
import Navbar from './components/Navbar';
import Background from './img/Profile Background.svg';
import r1 from './img/1.svg';
import r2 from './img/2.svg';
import r3 from './img/3.svg';
import r4 from './img/4.svg';
import vedio from './img/vedio.svg';
import vediobtn1 from './img/vediobtn.svg';
import vediobtn2 from './img/vediobtn2.svg';


function App() {
  return (
    <div>
      <Navbar />
      <img src={Background} className=" h-auto" />

      <section class="text-gray-600 body-font md:mx-40 mx-3">
        <div class="container px-5 mx-auto justify-between">
          <div class="flex flex-wrap -m-4 ">
            <div class="p-4 md:w-1/2 w-full one">
              <a class="inline-flex items-center gap-10">
                <img className="w-40  -mt-24" src={profilepic} />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-bold text-fontcolor">
                    John Doe <span class=" text-4xl text-black"> . </span>
                    <span class="text-hashtagcolor text-xs">@johndoe</span>
                  </span>
                  <span class="text-fontcolor text-sm font-semibold">
                    Astrophotographer 🌌
                    <br /> Gamer 👾
                  </span>
                </span>
                <span class="text-white text-sm bg-blubutton rounded-lg -mt-7 px-5 py-1 font-semibold">
                  <button>Follow</button>
                </span>
              </a>
              <p class="text-fontcolor md:text-xl font-bold my-5">
                How Astrophotography changed my life
              </p>
              <p class="text-fontcolor text-sm font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus. Curabitur
                tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
                a convallis. Sed ut vulputate nisi. Integer in felis sed leo
                vestibulum venenatis. Suspendisse quis
              </p>
              <p class="flex justify-between ">
                <section className="">
                  {" "}
                  <span class="text-hashtagcolor  md:text-xs text-[10px]">
                    ##photography
                  </span>
                  <span class="text-hashtagcolor md:text-xs text-[10px] p-5">
                    #astronomy
                  </span>
                  <span class="text-hashtagcolor md:text-xs text-[10px] ">
                    #astrophotography +
                  </span>
                </section>
                <button class="text-blubutton font-semibold">Read more</button>
              </p>
              <p class="text-fontcolor md:text-xl font-bold my-5">
                Which Telescope and DSLR I use
              </p>
              <p class="text-fontcolor text-sm font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus. Curabitur
                tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
                a convallis. Sed ut vulputate nisi. Integer in felis sed leo
                vestibulum venenatis. Suspendisse quis
              </p>
              <p class="flex justify-between ">
                <section>
                  {" "}
                  <span class="text-hashtagcolor md:text-xs text-[10px]">
                    ##photography
                  </span>
                  <span class="text-hashtagcolor md:text-xs text-[10px]  p-5">
                    #astronomy
                  </span>
                  <span class="text-hashtagcolor md:text-xs text-[10px] ">
                    #astrophotography +
                  </span>
                </section>
                <button class="text-blubutton font-semibold">Read more</button>
              </p>
            </div>

            <div class="p-16 md:w-1/2 w-full mx-auto">
              <p className="text-fontcolor  font-bold text-start">Photos</p>
              <div className="w-full flex mx-auto justify-center">
                <img src={r1} />
                <img src={r2} />
              </div>
              <div className="w-full flex mx-auto justify-center">
                <img src={r3} />
                <img src={r4} />
              </div>
              <p className="w-full text-fontcolor  font-bold mt-6 text-start">
                Videos
              </p>
              <div className="w-full relative">
                <img src={vedio} />

                <img
                  class=" border font-extrabold text-white px-3 py-2 rounded absolute md:top-12 md:left-40  top-8 left-28 bg-transparent hover:bg-gray-300 object-cover "
                  src={vediobtn2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
