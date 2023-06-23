"use client";

import Header1 from "./../components/typography/header";
import Main from "../components/main/main";

import { Carousel } from "./../components/carousel/carousel";

import { Gallery } from "./../components/carousel/gallery/gallery";

import Image from "next/image";

import photoBooth1 from "public/carousel/pexels-ana-arantes-2966345.jpg";

export default function Photobooth(options) {
  return (
    <Main>
      <Header1>Nos Photobooth</Header1>

      {/* <Gallery /> */}
      <Carousel />
    </Main>
  );
}
