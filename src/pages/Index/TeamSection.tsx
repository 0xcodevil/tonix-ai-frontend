
import { Card, CardContent } from "@/components/card";

const TeamSection = () => {
  const members = [
    { avatar: "https://avatar.iran.liara.run/public/47", name: "Nguyen Van Kien", title: "CTO - ATB Tech" },
    { avatar: "https://avatar.iran.liara.run/public/38", name: "Phạm Ngọc Tuân", title: "CMO - ATB Tech" },
    { avatar: "https://avatar.iran.liara.run/public/24", name: "Sunny Wong", title: "CEO - Merlion Software Lte" },
  ];

  const partners = [
    {
      icon: "/imgs/partners/cointpoint.png",
      title: "CointPoint",
    },
    {
      icon: "/imgs/partners/puppetapp.png",
      title: "PuppetApp",
    },
    {
      icon: "/imgs/partners/esimapp.jpg",
      title: "ESIMApp",
    },
    {
      icon: "/imgs/partners/oxyblegame.jpg",
      title: "OxybleGame",
    },
    {
      icon: "/imgs/partners/shroomy.jpg",
      title: "ShroomyGame",
    },
    {
      icon: "/imgs/partners/primeseed.png",
      title: "PrimeSeed Ventures",
    },
    {
      icon: "/imgs/partners/apexvc.png",
      title: "Apexvc",
    },
    {
      icon: "/imgs/partners/wenfund.jpg",
      title: "Wenfund",
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6 text-white">
            Team & Partners
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A sustainable economic model designed to reward participation, fuel growth, and ensure long-term platform success.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Token Allocation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-space font-bold mb-6 text-white">Our Team</h3>
            <Card className="h-fit bg-slate-800 border-gray-600">
              <CardContent className="space-y-6 pt-6">
                {members.map((member, index) => (
                  <div className="flex items-center gap-4">
                    <img src={member.avatar} className="w-16 h-16 rounded-full" alt="" />
                    <div key={index} className="space-y-2">
                      <div className="text-sm font-medium text-gray-300">{member.name}</div>
                      <div className="text-sm font-bold text-white">{member.title}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Token Utility */}
          <div className="space-y-6">
            <h3 className="text-2xl font-space font-bold mb-6 text-white">Our Partners & Investors</h3>
            {partners.map((partner, index) => {
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-slate-800 border-gray-600">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <img src={partner.icon} className="w-10 h-10 rounded-lg" />
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors text-white">
                      {partner.title}
                    </h4>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
