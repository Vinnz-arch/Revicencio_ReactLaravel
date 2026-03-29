import './App.css'

type User = {
  id: number;
  name: string;
  age: number;
  gradeLevel: string;
  status: 'active' | 'inactive';
  score: number;
};

function App() {
  const students: User[] = [
    {
      id: 101,
      name: 'Earl Vincent Revicencio',
      age: 25,
      gradeLevel: '10th Grade',
      status: 'active',
      score: 85
    },
    {
      id: 102,
      name: 'Masahide Yanagisawaskie',
      age: 22,
      gradeLevel: '12th Grade',
      status: 'active',
      score: 92
    },
    {
      id: 103,
      name: 'Vicentes Delidskie',
      age: 23,
      gradeLevel: '11th Grade',
      status: 'inactive',
      score: 78
    }
  ];

  return (
    <> {/*Fragment*/}
      <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Student Profile System</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {students.map((student) => (
            <div key={student.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-blue-600 mb-4">{student.name}</h2>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">ID:</span> {student.id}</p>
                <p><span className="font-semibold">Age:</span> {student.age}</p>
                <p><span className="font-semibold">Grade:</span> {student.gradeLevel}</p>
                <p>
                  <span className="font-semibold">Status:</span> 
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium uppercase ${
                    student.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {student.status}
                  </span>
                </p>
                <p><span className="font-semibold">Score:</span> {student.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
