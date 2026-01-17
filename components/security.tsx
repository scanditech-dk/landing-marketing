import React from "react";
import { Container } from "./container";
import { DivideX } from "./divide";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

export const Security = () => {
  return (
    <>
      
      <Container className="border-divide grid grid-cols-1 border-x bg-gray-100 px-8 py-12 md:grid-cols-2 dark:bg-neutral-900">
        <div>
          <SectionHeading className="text-left">
          Modular by nature. Complete by design.
          </SectionHeading>
          <SubHeading as="p" className="mt-4 text-left">
          Every module is purpose-built to stand alone — 
          and designed to integrate effortlessly across the lifecycle.
          </SubHeading>
        </div>
        
      </Container>
    </>
  );
};
