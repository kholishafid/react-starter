
import ReactLogo from '@/assets/react.svg'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: Index
})
function Index() {
	return (
		<div className='fixed inset-0 grid bg-neutral-900 px-3 pt-2'>
			<div className='m-auto'>
				<div className='flex flex-col-reverse gap-6 md:flex-row'>
					<img
						src={ReactLogo}
						alt='React Logo'
						className='animate-[spin_4s_linear_infinite]'
						width={96}
					/>
					<h1 className='text-8xl font-bold text-neutral-100'>
						Ready To Start
					</h1>
				</div>
			</div>
		</div>
	)
}
