import About from "../about"
import Footer from "../Footer"
import ContentContainer from "../../conponents/ContentContainer"

import { data as AboutData} from "../../contents/about"
import { data as ExperienceData} from "../../contents/experience"
import { data as ProjectData } from "../../contents/project"
import { data as CertificationData} from "../../contents/certification"

const RightSection = ({ onInitial }) =>{
    return (
        <div className="grid gap-y-36">
          <About 
            title="ABOUT"
            onInitial={onInitial}
            data={AboutData}
          />

          <ContentContainer 
            onInitial={onInitial} 
            title="EXPERIENCE" 
            data={ExperienceData}
          />

          <ContentContainer 
            onInitial={onInitial} 
            title="PROJECT" 
            data={ProjectData}
          />

          <ContentContainer 
            onInitial={onInitial} 
            title="CERTIFICATION" 
            data={CertificationData}
          />

          <Footer />
        
        </div>
    )
}

export default RightSection