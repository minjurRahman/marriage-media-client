import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SummaryBiodata = () => {

    const userInfo = useLoaderData();
    console.log(userInfo)
    const { BiodataType, MaritalStatus, Birthday, Height, Complexion, Weight, BloodGroup, Nationality } = userInfo;

    return (
        <div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <tbody className='border'>
                                    <tr
                                        class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">Marital Status</td>
                                        <td class="whitespace-nowrap px-6 py-4">{MaritalStatus}</td>
                                    </tr>
                                    <tr
                                        class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">Birthday</td>
                                        <td class="whitespace-nowrap px-6 py-4">{Birthday}</td>
                                    </tr>
                                    <tr
                                        class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">Hight</td>
                                        <td class="whitespace-nowrap px-6 py-4">{Height}</td>
                                    </tr>
                                    <tr
                                        class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">Complexion</td>
                                        <td class="whitespace-nowrap px-6 py-4">{Complexion}</td>
                                    </tr>
                                    <tr
                                        class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">Weight</td>
                                        <td class="whitespace-nowrap px-6 py-4">{Weight}</td>
                                    </tr>
                                    <tr
                                        class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">Blood Group</td>
                                        <td class="whitespace-nowrap px-6 py-4">{BloodGroup}</td>
                                    </tr>
                                    <tr
                                        class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">Nationality</td>
                                        <td class="whitespace-nowrap px-6 py-4">{Nationality}</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryBiodata;