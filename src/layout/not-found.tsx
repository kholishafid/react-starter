import { Link } from '@tanstack/react-router'

export default function NotFound() {
	return (
		<div className='fixed inset-0 grid bg-neutral-800'>
			<div className='m-auto flex flex-col'>
				<h1 className='mb-4 text-8xl font-bold text-neutral-100'>Oops...!</h1>
				<p className='mb-2 text-center text-lg text-neutral-400'>
					Something went wrong 🫥
				</p>
				<Link
					to='/'
					className='mx-auto rounded-lg bg-blue-600 px-4 py-2 text-white'
				>
					&lt;- Back
				</Link>
			</div>
		</div>
	)
}
