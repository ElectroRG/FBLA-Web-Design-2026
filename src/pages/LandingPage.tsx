import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calculator, Users, BookOpen } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <header className="px-6 h-16 flex items-center border-b border-border bg-card">
        <span className="text-2xl font-bold text-primary">CalcConnect</span>
        <nav className="ml-auto flex gap-6">
          <Button variant="ghost">Resources</Button>
          <Button variant="ghost">Tutoring</Button>
          <Button variant="default">Login</Button>
        </nav>
      </header>
      
      <main className="flex-1 p-8 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Master Calculus, <span className="text-primary">Together.</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          The student-led learning hub for derivatives, integrals, and everything in between.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <Calculator className="w-10 h-10 text-primary mb-2 mx-auto" />
              <CardTitle>Interactive Practice</CardTitle>
            </CardHeader>
            <CardContent>Graphing tools and derivative drills.</CardContent>
          </Card>
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-2 mx-auto" />
              <CardTitle>Peer Tutoring</CardTitle>
            </CardHeader>
            <CardContent>Join live sessions with fellow students.</CardContent>
          </Card>
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <BookOpen className="w-10 h-10 text-primary mb-2 mx-auto" />
              <CardTitle>Study Guides</CardTitle>
            </CardHeader>
            <CardContent>Hand-crafted notes by top-scoring peers.</CardContent>
          </Card>
        </div>
        <Button size="lg" className="px-8">Get Started <ArrowRight className="ml-2" /></Button>
      </main>
    </div>
  )
}