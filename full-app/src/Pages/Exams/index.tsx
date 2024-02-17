import { Fragment } from 'react'
import { useDispatch,useSelector } from 'react-redux';


let exams :object[]= [
  ]
  
  export default function Exams() {

    const examsS = useSelector( (state:any) => state.exams )
    const users = useSelector( (state:any) => state.users )
    const quizs = useSelector( (state:any) => state.quizs )

    examsS.forEach((exam:any)=>{
        exams.push({
            id : exam.id,
            idQuestion1 : exam.idQuestion1,
            idQuestion2 : exam.idQuestion2,
            idUser : exam.idUser,
            note : exam.note,
            imageUrl:
                'https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png',
            sendOn: exam.id.replace(/_(.)+/,' ').replace('-','/')
        })
    })

    const getUserName = (id:string) =>{
        const user =  users.find((user:any) => user.id === id) ;
        return `${user?.firstName  } ${user?.lastName }`
    }

    const dispatch = useDispatch()
    if (exams.length===0) {
            return (
                <div className="bg-white">
                <div className="mx-auto max-w-7xl  sm:px-6 sm:py-6 lg:px-8">
                <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Liste des examens passés à ce jour.</h3>
          </div>
                <ul role="list" className="divide-y divide-gray-100">
                <li key={"zedzdzede"} className="flex justify-between gap-x-6 py-5">
                    NOTHING
                </li>
                </ul>
                </div>
                </div>
            )
    } else {
        return (
            <>
    
            <div className="bg-white">
            <div className="mx-auto max-w-7xl  sm:px-6 sm:py-6 lg:px-8">
          <ul role="list" className="divide-y divide-gray-100">
            {exams.map((exam:any) => (
              <li key={exam.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={exam.imageUrl} alt="" />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{getUserName(exam.idUser)}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{`${exam.note }/20`}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{exam.difficulte}</p>
                  
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Envoyé le : <time dateTime={exam.id.replace()}>{exam.sendOn}</time>
                    </p>
                    <a href={`exam/${exam.id}`}>
                        <button
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Voir
                        </button>
                    </a>
                
                </div>
              </li>
            ))}
          </ul>
          </div>
          </div>
          </>
        )
    }
    
  }
  