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
  ) => (
    <h1
      className="text-3xl font-bold text-green my-6 leading-snug tracking-tight"
      {...props}
    />
  ),
  h2: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => (
    <h2
      className="text-2xl font-semibold text-purple my-6 leading-snug tracking-tight"
      {...props}
    />
  ),
  h3: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => (
    <h3
      className="text-xl font-medium text-text my-5 leading-snug"
      {...props}
    />
  ),
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLParagraphElement> &
      HTMLAttributes<HTMLParagraphElement>
  ) => (
    <p
      className="text-base text-text leading-loose my-4 max-w-3xl"
      {...props}
    />
  ),
  ul: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLUListElement> &
      HTMLAttributes<HTMLUListElement>
  ) => (
    <ul
      className="list-disc ml-6 my-4 space-y-2 text-text leading-relaxed"
      {...props}
    />
  ),
  ol: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLOListElement> &
      OlHTMLAttributes<HTMLOListElement>
  ) => (
    <ol
      className="list-decimal ml-6 my-4 space-y-2 text-text leading-relaxed"
      {...props}
    />
  ),
  li: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLLIElement> &
      LiHTMLAttributes<HTMLLIElement>
  ) => <li className="text-text leading-relaxed" {...props} />,
  blockquote: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLQuoteElement> &
      BlockquoteHTMLAttributes<HTMLQuoteElement>
  ) => (
    <blockquote
      className="border-l-4 border-purple pl-4 italic text-textSecondary my-6 bg-surface/40 py-2 px-3 rounded"
      {...props}
    />
  ),
  code: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>
  ) => (
    <code
      className="bg-surface text-green px-1 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLPreElement> &
      HTMLAttributes<HTMLPreElement>
  ) => (
    <pre
      className="bg-surface border border-border text-text p-4 rounded-lg overflow-x-auto my-6 text-sm leading-relaxed"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-border" />,
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
