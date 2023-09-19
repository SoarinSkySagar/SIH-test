import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

export default function FAQs() {
  return (
    <div className='px-32 mt-10 pb-16'>
        <h1 className='font-bold text-6xl text-center p-10'>FAQs</h1>
        <div>
            <Accordion>
                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-3xl font-semibold'>Section 1 title</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-3xl font-semibold'>Section 2 title</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-3xl font-semibold'>Section 3 title</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-3xl font-semibold'>Section 4 title</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-3xl font-semibold'>Section 5 title</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-3xl font-semibold'>Section 6 title</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-3xl font-semibold'>Section 7 title</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}
