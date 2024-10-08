'use client'

import { useNavExpandedState } from '@/hooks/use-nav-expanded-state';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { range } from 'es-toolkit';
import { BookOpen, Ellipsis, FolderCode, MessageSquare, PanelLeft, Pencil, Plus, Settings, Share, Trash } from 'lucide-react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import { Z0Icon } from './icons/z0';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Separator } from './ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
type NavProps = {
  className?: string
  isExpanded: boolean
}

type NavItemProps = {
  href: string
  label: string
  icon: React.ReactNode
  isExpanded: boolean
}

type HistoryItemProps = {
  id: string
  title: string
}

const navItems: Omit<NavItemProps, 'isExpanded'>[] = [
  {
    href: '/history',
    label: 'Chat History',
    icon: <BookOpen className='size-4' />,
  },
  {
    href: '/project',
    label: 'Project',
    icon: <FolderCode className='size-4' />,
  },
  {
    href: '/feedback',
    label: 'Feedback',
    icon: <MessageSquare className='size-4' />,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: <Settings className='size-4' />,
  },
]

function NavItem({ href, label, icon, isExpanded }: NavItemProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          aria-current={isActive ? 'page' : undefined}
          className={cn(
            'flex h-8 items-center overflow-hidden rounded-lg  hover:bg-gray-150',
            isActive ? 'bg-gray-150' : 'hover:bg-gray-150'
          )}
        >
          <Link
            className={cn('flex h-full w-full overflow-hidden px-2 text-sm')}
            href={href}
          >
            <div className='flex shrink-0 items-center justify-center gap-2'>
              {icon} {label}
            </div>
          </Link>
        </div>
      </TooltipTrigger>
      <TooltipContent
        side='right'
        className={cn(isExpanded ? 'hidden' : 'block')}
      >
        {label}
      </TooltipContent>
    </Tooltip>
  )
}

function HistoryItem({ id, title }: HistoryItemProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = pathname === `/chat/${id}`;
  return (
    <div
      className={cn(
        'group relative flex h-8 shrink-0 cursor-pointer items-center gap-2 overflow-hidden rounded-lg text-sm hover:bg-gray-150',
        isActive && 'bg-gray-150',
        open && 'bg-gray-150'
      )}
    >
      <Link
        href={`/chat/${id}`}
        className='flex h-full w-full items-center px-2'
      >
        <span className='w-full overflow-hidden text-ellipsis whitespace-nowrap'>
          {title}
        </span>
      </Link>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className={cn(
              'absolute right-1 flex size-6 items-center justify-center p-0 opacity-0 transition-all duration-100 ease-in-out hover:!bg-white/90 group-hover:bg-white/60 group-hover:opacity-100',
              open && '!bg-white/90 opacity-100'
            )}
          >
            <Ellipsis className='size-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side='right'
          className='flex w-40 flex-col gap-1 rounded-lg'
          align='start'
          sideOffset={8}
        >
          <DropdownMenuItem className='flex h-9 cursor-pointer items-center gap-2 rounded-lg overflow-hidden'>
            <Share className='size-4' /> Share
          </DropdownMenuItem>
          <DropdownMenuItem className='flex h-9 cursor-pointer items-center gap-2 rounded-lg overflow-hidden'>
            <Pencil className='size-4' /> Rename
          </DropdownMenuItem>
          <DropdownMenuItem className='flex h-9 cursor-pointer items-center gap-2 text-red-700 hover:bg-[#FF666618] hover:text-red-700 focus:bg-[#FF666618] focus:text-red-700 rounded-lg overflow-hidden'>
            <Trash className='size-4' /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default function Nav({ className, isExpanded }: NavProps) {
  const [expanded, toggleExpanded] = useNavExpandedState(isExpanded)
  const router = useRouter()
  return (
    <aside
      className={cn(
        'hidden transition-[width] duration-200 ease-in-out sm:block sm:w-sidebar-collapsed md:w-sidebar-expanded overflow-hidden',
        expanded
          ? 'sm:!w-sidebar-expanded md:!w-sidebar-expanded'
          : 'sm:!w-sidebar-collapsed md:!w-sidebar-collapsed',
        className
      )}
    >
      <div className='flex h-full flex-col'>
        {/* Logo */}
        <div className='relative flex shrink-0 items-center justify-between p-2 pb-1'>
          <div className={cn('shrink-0 transition-opacity duration-75')}>
            <a
              href='/'
              className='flex size-8 items-center justify-center text-sm text-gray-900'
            >
              <Z0Icon />
            </a>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  'absolute right-2 z-10 shrink-0 transition-opacity duration-75',
                  expanded ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                )}
              >
                <Button
                  variant='ghost'
                  onClick={toggleExpanded}
                  size='sm'
                  className='size-8 p-0'
                >
                  <PanelLeft size={16} strokeWidth={2} />
                </Button>
              </div>
            </TooltipTrigger>
            <TooltipContent side='right'>Toggle Sidebar</TooltipContent>
          </Tooltip>
        </div>
        {/* End Logo */}
        {/* Menu */}
        <div className='flex shrink-0 flex-col gap-2 p-2'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='outline-gray'
                className={cn('overflow-hidden text-sm', !expanded && 'p-0')}
                size='sm'
                onClick={() => router.push('/')}
              >
                {expanded ? 'New Chat' : <Plus className='size-4' />}
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side='right'
              className={cn(expanded ? 'hidden' : 'block')}
            >
              New Chat
            </TooltipContent>
          </Tooltip>
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isExpanded={expanded}
            />
          ))}
        </div>
        {/* End Menu */}
        {/* History */}
        {expanded && (
          <>
            <Separator />
            <div className='flex flex-1 flex-col gap-1 overflow-y-auto p-2'>
              <div className='flex h-9 shrink-0 items-center justify-between px-2'>
                <span className='text-[0.825rem] text-gray-500'>
                  Chat History
                </span>
              </div>
              {range(50).map((i) => (
                <HistoryItem key={i} id={i.toString()} title={`Chat ${i}`} />
              ))}
            </div>
            <Separator />
          </>
        )}
        {/* End History */}
        {/* Footer Github */}
        <div className='group mt-auto flex h-8 shrink-0 items-center justify-center overflow-hidden px-2'>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href='https://github.com/z0-ai/z0'
                target='_blank'
                className={cn('flex items-center gap-2 hover:underline')}
              >
                <GitHubLogoIcon className='size-4' />
                {expanded && (
                  <span className='text-sm text-gray-500'>Github</span>
                )}
              </a>
            </TooltipTrigger>
            <TooltipContent
              side='right'
              className={cn(expanded ? 'hidden' : 'block')}
            >
              Star on Github
            </TooltipContent>
          </Tooltip>
        </div>
        {/* End Footer */}
      </div>
    </aside>
  )
}

