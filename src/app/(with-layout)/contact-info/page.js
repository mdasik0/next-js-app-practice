import Link from 'next/link';
export const metadata = {
    title: "Contact",
    description: "This is contact page",
  };

const contactRoutePage = () => {
    return (
        <div>
            This is contact here
            <Link href={'/contact-info/kalumia'}>
                <button className='px-4 py-1 bg-slate-600 text-white rounded-xl ml-4'>
                    Dynamic route
                </button>
            </Link>
        </div>
    );
};

export default contactRoutePage;