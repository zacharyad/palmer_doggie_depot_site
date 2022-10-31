let styles = {
    faqItems: `
        bg-sky-200 
        rounded
    `
}

const FaqItem = ({title, content}) => {
    return (
           <div className="faq">
                <div className={`faq-header ${styles.faqItems}`}>
                    <h3 className="faq-title color-white">
                    {title}
                    </h3>
                </div>
                <div className="faq-body">
                    <div className="faq-text my-4 indent-4 text-start">
                        {content}
                    </div>
                    
                </div>
            </div>

    )
}

export default FaqItem