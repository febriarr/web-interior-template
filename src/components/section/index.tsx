import { cn } from '@/lib/utils'
import React, {
  createContext,
  useContext,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react'

// Shared types
export type SectionHeaderType = 'horizontal' | 'vertical' | 'centered'

// Context - supaya SectionTitle & SectionDescription tahu orientasi
// header-nya tanpa harus dioper manual sebagai props
const SectionHeaderContext = createContext<SectionHeaderType>('vertical')

// <Section />
// Wrapper paling luar. Buat menunjang SEO nya bang pake semantik
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

export function Section({ className, children, ...props }: SectionProps): ReactElement {
  return (
    <section className={cn('w-full bg-secondary min-h-screen', className)} {...props}>
      {children}
    </section>
  )
}

// <SectionContent />
// Pembungkus padding konten di dalam Section.
export interface SectionContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function SectionContent({
  className,
  children,
  ...props
}: SectionContentProps): ReactElement {
  return (
    <div
      className={cn(
        // Display
        'flex flex-col',
        // Spacing
        'gap-4  px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 xl:px-20',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// <SectionHeader type="horizontal | vertical" action={...} />
//
/**
 * SectionHeeader ini  SectionTitle dan SectionDescription optional bang jadi kalo tidak ada gaperlu di define SectionHeader nya
 * Tapi kalo mau dipake harus ada title dan description
 *
 * Actionnya juga optional, nanti buat di isi pake button field yang udah tak sediain di fields
 *
 * Visualisasinya kek gini
 * Type vertical:
 * title
 * description
 * action (di kanan sejajar title+description)
 *
 * Type horizontal:
 * title | description
 *        | action (nempel di bawah description)
 */

export interface SectionHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  type?: SectionHeaderType
  action?: ReactNode
  /** Diharapkan berisi <SectionTitle> dan/atau <SectionDescription>. */
  children?: ReactNode
}

function isElementOfType<P>(
  node: ReactNode,
  component: (props: P) => ReactElement | null,
): node is ReactElement<P, typeof component> {
  return React.isValidElement<P>(node) && node.type === component
}

export function SectionHeader({
  type = 'vertical',
  className,
  children,
  action,
  ...props
}: SectionHeaderProps): ReactElement {
  const childArray = React.Children.toArray(children)

  const title = childArray.find((child) => isElementOfType<SectionTitleProps>(child, SectionTitle))
  const description = childArray.find((child) =>
    isElementOfType<SectionDescriptionProps>(child, SectionDescription),
  )
  const rest = childArray.filter((child) => child !== title && child !== description)

  return (
    <SectionHeaderContext.Provider value={type}>
      <div className={cn(className)} {...props}>
        {type === 'horizontal' ? (
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">{title}</div>
            <div className="flex flex-col items-end gap-1 min-w-0">
              {description}
              {action}
            </div>
          </div>
        ) : type === 'centered' ? (
          <div className="flex flex-col items-center gap-1 text-center">
            {title}
            {description}
            {action ? <div className="mt-2">{action}</div> : null}
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1 min-w-0">
              {title}
              {description}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
          </div>
        )}
        {rest}
      </div>
    </SectionHeaderContext.Provider>
  )
}

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export function SectionTitle({ className, children, ...props }: SectionTitleProps): ReactElement {
  const type = useContext(SectionHeaderContext)
  return (
    <h3
      className={cn(
        'font-serif text-2xl sm:text-3xl md:text-4xl leading-tight tracking-[-0.01em] text-foreground',
        type === 'centered' && 'text-center',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

// <SectionDescription />
export interface SectionDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode
}

export function SectionDescription({
  className,
  children,
  ...props
}: SectionDescriptionProps): ReactElement {
  const type = useContext(SectionHeaderContext)
  return (
    <p
      className={cn(
        'mt-1.5 text-sm text-muted-foreground max-w-sm leading-relaxed',
        type === 'horizontal' && 'text-right',
        type === 'centered' && 'text-center',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// export default function Demo(): ReactElement {
//   return (
//     <div className="min-h-screen w-full bg-neutral-50 p-8 flex flex-col gap-6 items-center">
//       <div className="w-full max-w-2xl flex flex-col gap-6">
//         {/* Contoh 1: header vertical, action di kanan sejajar title+description */}
//         <Section>
//           <SectionContent>
//             <SectionHeader type="vertical" action={<Btn>Tambah</Btn>}>
//               <SectionTitle>Profil Tim</SectionTitle>
//               <SectionDescription>
//                 Kelola anggota tim dan hak akses mereka di sini.
//               </SectionDescription>
//             </SectionHeader>

//             {/* konten lainnya */}
//             <div className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-3">
//               <span className="text-sm text-neutral-700">Budi Santoso</span>
//               <span className="text-xs text-neutral-400">Admin</span>
//             </div>
//             <div className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-3">
//               <span className="text-sm text-neutral-700">Siti Amalia</span>
//               <span className="text-xs text-neutral-400">Member</span>
//             </div>
//           </SectionContent>
//         </Section>

//         {/* Contoh 2: header horizontal, action nempel di bawah description (kanan) */}
//         <Section>
//           <SectionContent>
//             <SectionHeader type="horizontal" action={<Btn>Simpan</Btn>}>
//               <SectionTitle>Notifikasi</SectionTitle>
//               <SectionDescription>
//                 Atur preferensi notifikasi email dan push.
//               </SectionDescription>
//             </SectionHeader>

//             <div className="flex items-center justify-between text-sm">
//               <span className="text-neutral-700">Email marketing</span>
//               <span className="text-neutral-400">Aktif</span>
//             </div>
//           </SectionContent>
//         </Section>

//         {/* Contoh 3: header centered — cocok untuk empty state / auth card */}
//         <Section>
//           <SectionContent>
//             <SectionHeader type="centered" action={<Btn>Buat Proyek</Btn>}>
//               <SectionTitle>Belum Ada Proyek</SectionTitle>
//               <SectionDescription>
//                 Mulai dengan membuat proyek pertamamu untuk melihatnya di
//                 sini.
//               </SectionDescription>
//             </SectionHeader>
//           </SectionContent>
//         </Section>

//         {/* Contoh 4: tanpa SectionHeader sama sekali — langsung konten */}
//         <Section>
//           <SectionContent>
//             <div className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-3">
//               <span className="text-sm text-neutral-700">
//                 Storage terpakai
//               </span>
//               <span className="text-xs text-neutral-400">4.2 GB / 10 GB</span>
//             </div>
//             <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
//               <div className="h-full w-[42%] rounded-full bg-neutral-900" />
//             </div>
//           </SectionContent>
//         </Section>
//       </div>
//     </div>
//   );
// }
