import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { addExam } from '../../Store/Features/examsSlice'
import { addQuiz } from '../../Store/Features/quizsSlice'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import InfosForm from '../../Components/DashboardComponents/Form'
// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNames(...classes : any) {
//   return classes.filter(Boolean).join(' ')
// }
import { useDispatch,useSelector } from 'react-redux';
import { Exam } from '../../Classes/Exam';
import { User } from '../../Classes/User';

const avatarUrls = ["https://cdn.pixabay.com/photo/2016/09/12/09/51/abc-1663383_1280.png","https://cdn.pixabay.com/photo/2016/09/12/09/51/abc-1663385_1280.png","https://cdn.pixabay.com/photo/2016/09/12/09/52/abc-1663386_1280.png","https://cdn.pixabay.com/photo/2016/09/12/09/52/abc-1663387_1280.png"];


let identifier :number = 0;

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }

export default function Dashboard() {
    let propositionsQuiz1 = [
        {
          id: 1,
          name: 'Selectionnez',
          avatar:
            'https://cdn.pixabay.com/photo/2016/10/14/19/33/ankreuzen-1740989_1280.png',
        }
      ]
    
    let propositionsQuiz2 = [
    {
        id: 1,
        name: 'Selectionnez',
        avatar:
        'https://cdn.pixabay.com/photo/2016/10/14/19/33/ankreuzen-1740989_1280.png',
    }
    ]
    const [selectedQuiz1, setSelectedQuiz1] = useState(propositionsQuiz1[0])
    const [selectedQuiz2, setSelectedQuiz2] = useState(propositionsQuiz2[0])

    const dispatch = useDispatch()

    const handleReset = (e:any) => {
        e.preventDefault()
        setSelectedQuiz1(propositionsQuiz1[0]);
        setSelectedQuiz2(propositionsQuiz2[0]);

    }

    const users = useSelector( (state:any) => state.users )

    console.log(users);
    
  
    if ((users.length !== 0)) {
        identifier = 2

        const user : User = users[users.length - 1];
        
        const exam : Exam = new Exam(user.level);
        
        const {id,quiz1,quiz2} = exam.init();
            quiz1.propositions.forEach((proposition,index)=>{
                propositionsQuiz1.push({
                    id : index+2,
                    name : proposition.toString(),
                    avatar : avatarUrls[index]
                })
            })
    
            quiz2.propositions.forEach((proposition,index)=>{
                propositionsQuiz2.push({
                    id : index+2,
                    name : proposition.toString(),
                    avatar : avatarUrls[index]
                })
            })
        // else {
        //     let prop1 : any = [];
        //     let prop2 : any = [];
        //     quiz1.propositions.forEach((proposition,index)=>{
        //         prop1.push({
        //             id : index+2,
        //             name : proposition.toString(),
        //             avatar : avatarUrls[index]
        //         })
        //     })
    
        //     quiz2.propositions.forEach((proposition,index)=>{
        //         prop2.push({
        //             id : index+2,
        //             name : proposition.toString(),
        //             avatar : avatarUrls[index]
        //         })
        //     })

        //     propositionsQuiz1 =[{
        //         id: 1,
        //         name: 'Selectionnez',
        //         avatar:
        //           'https://cdn.pixabay.com/photo/2016/10/14/19/33/ankreuzen-1740989_1280.png',
        //       }, prop1[0], prop1[1], prop1[2], prop1[3]] ;
        //     propositionsQuiz2 = [{
        //         id: 1,
        //         name: 'Selectionnez',
        //         avatar:
        //           'https://cdn.pixabay.com/photo/2016/10/14/19/33/ankreuzen-1740989_1280.png',
        //       }, prop2[0], prop2[1], prop2[2], prop2[3]];
        // }

        const goSubmit = (e:any) => {

            // e.preventDefault()

            let examPrim : any =  {
                id : id,
                idQuestion1 : quiz1.id,
                idQuestion2 : quiz2.id,
                idUser : user.id,
                note : exam.note(parseInt(selectedQuiz1.name),selectedQuiz2.name),
                difficulte : user.level
              }

              
            let quiz1Prim :any = {
                id : quiz1.id,
                question : quiz1.quiz,
                propositions : quiz1.propositions,
                ExactResponse : quiz1.response,
                userResponse : selectedQuiz1.name,
                note : quiz1.response===selectedQuiz1? 10:0,
            }

            let quiz2Prim :any = {
                id : quiz2.id,
                question : quiz2.quiz,
                propositions : quiz2.propositions,
                ExactResponse : quiz2.response,
                userResponse : selectedQuiz2.name,
                note : quiz2.response===selectedQuiz2? 10:0,
            }

            dispatch(addQuiz(quiz1Prim));
            dispatch(addQuiz(quiz2Prim));

            setTimeout(() => {
                dispatch(addExam(examPrim));
            }, 20);

            // handleReset(e)
        }


       return (<>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-100">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <Listbox value={selectedQuiz1} onChange={setSelectedQuiz1}>
                {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                    Quel est le résultat de la conversion de l'hexaDecimal <strong>{quiz1.quiz}</strong> en decimal ? {quiz1.response}
                    </Listbox.Label>
                    <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                            <img src={selectedQuiz1.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                            <span className="ml-3 block truncate">{selectedQuiz1.name}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                        </Listbox.Button>

                        <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {propositionsQuiz1.map((proposition) => (
                            <Listbox.Option
                                key={proposition.id}
                                className={({ active }) =>
                                classNames(
                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                )
                                }
                                value={proposition}>
                                {({ selected, active }) => (
                                <>
                                    <div className="flex items-center">
                                    <img src={proposition.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                    <span
                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                    >
                                        {proposition.name}
                                    </span>
                                    </div>

                                    {selectedQuiz1 ? (
                                    <span
                                        className={classNames(
                                        active ? 'text-white' : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                        )}
                                    >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    ) : null}
                                </>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Transition>
                    </div>
                </>
      )}
                </Listbox>

                <Listbox value={selectedQuiz2} onChange={setSelectedQuiz2}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
          Quel est le résultat de la conversion du decimal <strong>{quiz2.quiz}</strong>  en hexaDecimal ? {quiz2.response}
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selectedQuiz2.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selectedQuiz2.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {propositionsQuiz2.map((proposition) => (
                  <Listbox.Option
                    key={proposition.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={proposition}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={proposition.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {proposition.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
                </Listbox>
    <div className="mt-6 flex items-center justify-end gap-x-6">
        {/* <a href='/'> */}
          <button type="button" className="rounded-md text-sm  px-3 py-2 font-semibold text-white bg-red-600 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-60" onClick={()=> window.history.back()}>
            Annuler
          </button>
        {/* </a> */}
        <a href='/exams'>
          <button
            type="submit"
            onClick={(e)=>goSubmit(e)}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Soumettre
          </button>
        </a>
    </div>
    </div>
          </div>
      </>)
    } else {
        identifier = 1;
        return (
            <>
              {/*
                This example requires updating your template:
        
                ```
                <html class="h-full bg-gray-100">
                <body class="h-full">
                ```
              */}
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <InfosForm />
                </div>
            </div>         
            </>
          )
    }
  
}
