import React from 'react'
import img from '../../assets/img/project-details/bioinform.jpeg'
import img1 from '../../assets/img/project-details/biosd5.jpg'

const SingleServiceDeatils = () => {
    return (
        <>
            <section id="service-details" className="py50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h2 className="pt10">Bioinformatics</h2>
                                    <p>Bioinformatics is a broad scientific research field that combines biology,
                                         computer science, data science, mathematics and statistics to drive the
                                          analysis of the vast amount of data associated with modern bioscience.</p>
                                    <p>From discovering new antibiotics to fighting pandemics or making agriculture
                                         more sustainable, the promise is great and the applications are already
                                          rolling in.</p>
                                    <p>We offer a wide array of bioinformatic services, such as analysis of
                                               next-generation sequencing data, microRNA search and analysis or design
                                             of PCR starters. Don't hesitate and contact us!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-details-img mt30">
                                <img alt="" src={img} />
                            </div>
                        </div>
                    </div>
                    {/* <div className='row'>
                        <div className='col'>
                            <h2 className="pt10">Genome Annotation</h2>
                                <ul>
                                    <li>Genome annotation with RNA-Seq data</li>
                                    <li>Automated annotation of prokaryotic and eukaryotic genomes</li>
                                    <li>Identification of non-coding RNAs (long non-coding RNAs, microRNAs and other ncRNAs)</li>
                                    <li>Identification of repetitive elements</li>
                                    <li>Setting up stand-alone (IGV) and online (JBrowse) genome browsers</li>
                                    <li>Building online databases with genomic and transcriptomic data</li>
                                </ul>
                        </div>
                    </div> */}
                    <div className='row py50 mt60' style={{ backgroundImage: `linear-gradient(to right, rgb(227, 229, 236),rgb(255, 255, 255)`}}>
                        <div className="col-lg-4 mt20">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">RNA-Seq</h3>
                                    <p>Gene and transcript expression estimation
                                    Differential expression analysis
                                    Ab initio transcriptome assembly (genome-based) and annotation; detection of novel genes and splicing isoforms and
                                    De novo transcriptome assembly (genome-independent)</p>   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt20">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Small RNA Analysis</h3>
                                        <p>Identification of miRNAs and phased siRNAs
                                        Quantification and differential expression
                                        IsomiR and miRNA editing analysis
                                        Degradome-Seq data processing
                                        Identification of sRNA targets
                                        Data upload to miRBase</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt20">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Genome Variants Calling</h3>
                                    <p>SNPs, small INDELs, structural variants
                                    Germline and somatic alterations (e.g. tumor vs normal tissue)
                                    Whole Genome Sequencing (WGS), Exome-Seq, targeted sequencing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default SingleServiceDeatils
