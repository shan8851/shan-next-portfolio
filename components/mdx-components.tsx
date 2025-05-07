import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import {
  BlockquoteHTMLAttributes,
  AnchorHTMLAttributes,
  ClassAttributes,
  HTMLAttributes,
  OlHTMLAttributes,
  LiHTMLAttributes,
} from 'react';

const components = {
  h1: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h1 className="text-3xl font-bold text-text my-6" {...props} />,
  h2: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h2 className="text-2xl font-semibold text-text my-5" {...props} />,
  h3: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h3 className="text-xl font-medium text-text my-4" {...props} />,
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLParagraphElement> &
      HTMLAttributes<HTMLParagraphElement>
  ) => <p className="text-base text-text leading-relaxed my-4" {...props} />,
  ul: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLUListElement> &
      HTMLAttributes<HTMLUListElement>
  ) => <ul className="list-disc ml-6 my-4 text-text" {...props} />,
  ol: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLOListElement> &
      OlHTMLAttributes<HTMLOListElement>
  ) => <ol className="list-decimal ml-6 my-4 text-text" {...props} />,
  li: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLLIElement> &
      LiHTMLAttributes<HTMLLIElement>
  ) => <li className="mb-1 text-text" {...props} />,
  blockquote: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLQuoteElement> &
      BlockquoteHTMLAttributes<HTMLQuoteElement>
  ) => (
    <blockquote
      className="border-l-4 border-border pl-4 italic text-textSecondary my-6"
      {...props}
    />
  ),
  code: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>
  ) => (
    <code
      className="bg-surface text-green px-1 py-0.5 rounded text-sm"
      {...props}
    />
  ),
  pre: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLPreElement> &
      HTMLAttributes<HTMLPreElement>
  ) => (
    <pre
      className="bg-surface text-text p-4 rounded-lg overflow-x-auto border border-border my-6"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  a: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLAnchorElement> &
      AnchorHTMLAttributes<HTMLAnchorElement>
  ) => (
    <a
      className="text-green underline underline-offset-2 hover:text-purple transition-colors"
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
