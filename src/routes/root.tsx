import ReactLogo from '~/assets/react.svg'

const Root = () => {
	return (
		<div className='fixed  inset-0 grid bg-neutral-800 px-3 pt-2'>
			<div className='m-auto'>
				<div className='flex gap-6'>
					<h1 className='text-8xl font-bold text-neutral-100'>
						Ready To Start
					</h1>
					<img
						src={ReactLogo}
						alt='React Logo'
						className='animate-[spin_4s_linear_infinite]'
						width={96}
					/>
				</div>
			</div>
		</div>
	)
}

export default Root
