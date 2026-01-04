import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function StudentDashboard() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-3xl font-bold">Welcome back, Alex!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Learning Progress</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2"><span>Derivatives</span><span>85%</span></div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2"><span>Integration</span><span>40%</span></div>
              <Progress value={40} className="h-2" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader><CardTitle>Upcoming Sessions</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Topic</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Power Rule Drill</TableCell>
                  <TableCell>Today, 4:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">U-Substitution</TableCell>
                  <TableCell>Wed, 5:30 PM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}