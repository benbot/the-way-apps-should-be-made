import Link from 'next/link';
import '../style.css';

const Index = () => (
  <div className="leading-tight p-10 font-bold text-gray-800 bg-orange-200 mx-auto mt-10 rounded max-w-sm">
    <p className="text-center w-100">Hello, World</p>
    <br/>
    <p className="text-center w-100">Hello, World</p>
    <br/>
    <span className="text-indigo-400">
      <p className="text-center w-100">Hello, World</p>
      <br/>
      <p className="text-center w-100">Hello, World</p>
    </span>
    <br/>
    <Link href="google.com">
      <div className="btn ml-24">
        <a>Test</a>
      </div>
    </Link>
  </div>
);

export default Index;
