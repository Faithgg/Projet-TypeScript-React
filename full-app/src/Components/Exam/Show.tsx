
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeExam } from '../../Store/Features/examsSlice';
import { removeQuiz } from '../../Store/Features/quizsSlice';
import Error from '../Error';
import { PaperClipIcon } from '@heroicons/react/20/solid'
export default function ExamShow() {
    const { id } = useParams();
    
   const examsS = useSelector( (state:any) => state.exams )
    const users = useSelector( (state:any) => state.users )
    const quizs = useSelector( (state:any) => state.quizs )
    const dispatch = useDispatch()    

    const exam:any = examsS.find((exam:any)=> exam.id === id )

    if (exam !==undefined) {
        const getUserName = (id:string) =>{
            const user =  users.find((user:any) => user.id === id) ;
            return `${user?.firstName  } ${user?.lastName }`
        }
        
        const getQuiz = (id:string) =>{
            const quiz:any =  quizs.find((quiz:any) => quiz.id === id) ;
            return quiz 
        }

        const quiz1:any = getQuiz(exam.idQuestion1);
        const quiz2:any = getQuiz(exam.idQuestion2);

        console.log(quiz1);
        
        const handleRemove = (e:any)=>{
            dispatch(removeQuiz(quiz1.id))
            dispatch(removeQuiz(quiz2.id))
            dispatch(removeExam(exam.id))
        }
      return (
        <div className="bg-white">
        <div className="mx-auto max-w-7xl  sm:px-6 sm:py-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Résultat d'Examen</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Effectué le {exam.id.replace(/_(.)+/,' ').replace('-','/')}</p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Nom et Prénoms :</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{getUserName(exam.idUser)}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Question 1</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Convertion de l'exadecimal <strong>{quiz1.question}</strong> en deximal. 
                La bonne réponse étant <strong>{quiz1.ExactResponse}</strong>. Parmis les propositions : <strong>{quiz1.propositions[0]}</strong>, <strong>{quiz1.propositions[1]}</strong>, <strong>{quiz1.propositions[2]}</strong> et <strong>{quiz1.propositions[3]}</strong>; vous avez soumis <strong>{quiz1.userResponse}</strong>. Ce qui vous vaut <strong>{quiz1.note}/10</strong> </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Question 2</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Convertion du decimal <strong>{quiz2.question}</strong> en hexadeximal. 
                La bonne réponse étant <strong>{quiz2.ExactResponse}</strong>. Parmis les propositions : <strong>{quiz2.propositions[0]}</strong>, <strong>{quiz2.propositions[1]}</strong>, <strong>{quiz2.propositions[2]}</strong> et <strong>{quiz2.propositions[3]}</strong>; vous avez soumis <strong>{quiz2.userResponse}</strong>. Ce qui vous vaut <strong>{quiz2.note}/10</strong> </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Note </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{exam.note}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Décision du Jury</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{exam.note>=10? "ADMIN" : "REFUSÉ"}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Actions</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        {/* <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                          <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                        </div> */}
                      </div>
                      <div className="ml-4 flex-shrink-0" onClick={(e)=>{handleRemove(e)}}>
                        <a href="/exams" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Supprimer
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">exam{exam.id}.pdf</span>
                          <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Télecharger
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        </div>
      )
    } else {
        return (
            <Error/>
        )
    }
}
