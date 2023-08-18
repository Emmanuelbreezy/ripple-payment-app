import tw from "twin.macro";
import { Footer, NavigationBar } from "../../component";


export default function withLandingLayout( WrappedComponent: () => JSX.Element,
    showNav?: boolean,) {
   
    const LandingLayout = (props: any) => {
      return (
        <div className="w-full flex flex-col h-auto">
          {showNav ? <NavigationBar /> : null}
          <ContainerStyle>
            <WrappedComponent {...props} />
          </ContainerStyle>
         <Footer />
        </div>
      );
    };
  
    LandingLayout.displayName = "LandingLayout";
    return LandingLayout;
  }
  
  const ContainerStyle = tw.div`flex-1 h-auto`;