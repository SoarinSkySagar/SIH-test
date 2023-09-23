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
                                <h2 className='text-2xl font-semibold'>1. What is blockchain-based certificate generation and validation?</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Blockchain-based certificate generation and validation is a technology-driven process that leverages blockchain's secure and
                         transparent nature to create tamper-proof digital certificates. 
                        These certificates can be easily verified and trusted by various stakeholders, such as educational institutions, employers, and individuals.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-2xl font-semibold'>2. Is my personal information safe when using your platform?</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Yes, your personal information is safeguarded using encryption and stringent security measures.
                         We prioritize the privacy and security of our users' data and adhere to strict data protection standards.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-2xl font-semibold'>3. What types of certificates can I generate using your platform?</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Our platform supports a wide range of certificates, including academic degrees, professional certifications, training achievements, and more. 
                        You can create and validate certificates for various purposes.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-2xl font-semibold'>4. Can I transfer or share my blockchain-based certificates easily?</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Yes, you can easily share your certificates digitally 
                        with anyone who needs to verify them, whether it's an employer, a university, or a prospective client. Our platform simplifies the sharing and validation process.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-2xl font-semibold'>5. Are these blockchain-based certificates recognized by institutions and employers?</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Many educational institutions, employers, and organizations recognize the value of blockchain-based certificates due to their enhanced security and trustworthiness.
                         However, acceptance may vary, so it's essential to check with the specific entity you intend to provide the certificate to.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-2xl font-semibold'>6. How can I contact your support team if I have additional questions or issues?</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>You can reach our support team through our dedicated contact page or email us at [Your Support Email].
                         We're here to assist you with any inquiries or concerns you may have about blockchain-based certificate generation and validation.</p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 className='bg-white rounded-lg mb-1'>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <h2 className='text-2xl font-semibold'>7. What makes your platform different from traditional certificate issuance methods?</h2>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className='text-xl'>Unlike traditional methods that rely on paper certificates and manual verification processes, our platform offers speed, security,
                         and transparency through blockchain technology.
                         It streamlines the entire process, saving time and reducing the risk of fraud.</p>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}
