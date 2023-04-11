import React from 'react'

const Article = () => {
  return (
    <div>
      <div class="flex justify-center mt-10">
        <div class="flex flex-col justify-center">
          <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div class="overflow-hidden w-full flex justify-center">
              <div class="flex flex-col md:flex-row items-center m-1 gap-10">
                <div class=" w-3/4 md:w-1/2 overflow-hidden border-black\ m-1 p-9 gap-2 shadow shadow-black "> <img
                  src="https://asset.kompas.com/crops/FenKB9Q5sBss57PZJ42JXPEVNUQ=/83x0:673x393/230x152/data/photo/2023/03/26/641f7bdded183.jpg" alt="" className='w-full h-60 bg-cover' />
                  <div class="flex text-gray-500 text-sm m-2 ">
                    <div class="m-1 font-bold">Vlog,</div>
                    <div class="m-1">31 March, 2023</div>
                  </div>
                  <div class="font-bold text-black text-xl m-2">Study nature, love nature, stay close to nature.
                    It will never fail you.</div>
                  <div class="text-sm text-gray-500 mt-4 m-2"><a href="#"></a></div>
                  <div class="flex cursor-pointer">
                    <div class="m-2"> <img src="https://source.unsplash.com/50x50/?girl" alt=""
                      class=" rounded-full" /> </div>
                    <div class="grid m-1">
                      <div class="font-bold text-sm hover:text-gray-600 mt-2">Bais</div>
                      <div class=" text-sm hover:text-gray-600">WEB Dev, Tegal</div>
                    </div>
                  </div>
                </div>

                <div class=" w-3/4 md:w-1/2 overflow-hidden border-black\ m-1 p-9 gap-2 shadow shadow-black "> <img
                  src="https://asset.kompas.com/crops/buH9V8-l83otSdL6bpiAXpWkjxQ=/0x0:1500x1000/230x152/data/photo/2022/12/30/63ae8e9ea1cc4.jpeg" alt="" className='w-full h-60 bg-cover' />
                  <div class="flex text-gray-500 text-sm m-2 ">
                    <div class="m-1 font-bold">Vlog,</div>
                    <div class="m-1">31 March, 2023</div>
                  </div>
                  <div class="font-bold text-black text-xl m-2">Study nature, love nature, stay close to nature.
                    It will never fail you.</div>
                  <div class="text-sm text-gray-500 mt-4 m-2"><a href="#"></a></div>
                  <div class="flex cursor-pointer">
                    <div class="m-2"> <img src="https://source.unsplash.com/50x50/?girl" alt=""
                      class=" rounded-full" /> </div>
                    <div class="grid m-1">
                      <div class="font-bold text-sm hover:text-gray-600 mt-2">Bais</div>
                      <div class=" text-sm hover:text-gray-600">WEB Dev, Tegal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default Article