import { diploma } from "@/fonts/font-init";
import React from "react";

const page = () => {
  return (
    <div className="px-4 lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-2 font-semibold text-red-700`}>
        O nas
      </h1>
      <div className="flex gap-4 flex-col">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          fugit inventore similique quae sequi minus, molestias facilis
          cupiditate sed eaque asperiores necessitatibus. Culpa, natus. Eos
          quisquam est molestiae inventore magnam!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          unde earum provident iure officiis sit illo voluptatibus eum dicta
          autem dolore eveniet veniam nihil maxime, reiciendis possimus. Sed,
          expedita omnis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          optio nobis, tempore esse odit adipisci, ipsa distinctio a eveniet
          vitae nemo cum. Nihil ab fuga repudiandae rerum vitae, sed neque.
        </p>
      </div>
    </div>
  );
};

export default page;
