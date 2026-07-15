import { Award, Clock, HeartHandshake, Users, Wrench } from "lucide-react";
import { Counter } from "./Counter";

const stats = [
  { icon: Award, value: 4, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 5000, suffix: "+", label: "Happy Customers" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support Available" },
  { icon: HeartHandshake, value: 100, suffix: "%", label: "Genuine Service" },
  { icon: Wrench, value: 25, suffix: "+", label: "Expert Technicians" },
];

export function Trust() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass rounded-[2rem] p-8 lg:p-12 shadow-elevated">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="group text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-cyan text-white transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 text-4xl lg:text-5xl font-display gradient-text">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
