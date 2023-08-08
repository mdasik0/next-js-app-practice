import Card from '@/component/Card/Card';
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
                    See more about Contact
                </button>
            </Link>
            <div className='my-10 px-10 h-[800px] bg-yellow-400 py-10'>
                {/* card */}

                <h1 className='bg-blue-400'>hello i am </h1>
                <Card></Card>
            </div>
        </div>
    );
};

export default contactRoutePage;