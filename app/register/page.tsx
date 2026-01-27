 "use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-4 py-10">
      <div className="container max-w-3xl mx-auto pt-10">
        <Card className="border-gray-800 shadow-xl bg-gray-900/80 backdrop-blur">
          <CardHeader className="text-center space-y-3">
            <CardTitle className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Registrations will open soon
            </CardTitle>
            <p className="text-gray-300 text-sm sm:text-base">
              The registration portal is currently closed. Event dates and registration
              window will be revealed soon.
            </p>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="rounded-lg border border-dashed border-gray-700 bg-gray-900/60 p-4 text-center text-sm text-gray-300">
              This is a preview of the registration form. All fields are currently{" "}
              <span className="font-semibold text-gray-100">disabled</span> until
              registrations open.
            </div>

            <form className="space-y-6" aria-disabled="true">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-200">
                    Full Name
                  </label>
                  <Input
                    placeholder="Your name"
                    disabled
                    className="bg-gray-900/60 border-gray-700 text-gray-400 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-200">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    disabled
                    className="bg-gray-900/60 border-gray-700 text-gray-400 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-200">
                    Phone Number
                  </label>
                  <Input
                    placeholder="+91 XXXXX XXXXX"
                    disabled
                    className="bg-gray-900/60 border-gray-700 text-gray-400 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-200">
                    Institution
                  </label>
                  <Input
                    placeholder="Your college / school"
                    disabled
                    className="bg-gray-900/60 border-gray-700 text-gray-400 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-200">
                    Committee Preference
                  </label>
                  <Select disabled>
                    <SelectTrigger className="bg-gray-900/60 border-gray-700 text-gray-400 cursor-not-allowed">
                      <SelectValue placeholder="Select committee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="disec">DISEC</SelectItem>
                      <SelectItem value="unhrc">UNHRC</SelectItem>
                      <SelectItem value="aippm">AIPPM</SelectItem>
                      <SelectItem value="ip">International Press (IP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-200">
                    Registration Type
                  </label>
                  <Select disabled>
                    <SelectTrigger className="bg-gray-900/60 border-gray-700 text-gray-400 cursor-not-allowed">
                      <SelectValue placeholder="Single / Group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single Delegate</SelectItem>
                      <SelectItem value="multiple">Group Delegation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-200">
                  Prior MUN / Public Speaking Experience
                </label>
                <Textarea
                  placeholder="Briefly describe your prior experience"
                  disabled
                  className="bg-gray-900/60 border-gray-700 text-gray-400 cursor-not-allowed min-h-[100px]"
                />
              </div>

              <div className="w-full rounded-lg border border-gray-800 bg-gray-900/70 px-4 py-3 text-center text-sm text-gray-300">
                Registrations are{" "}
                <span className="font-semibold text-gray-100">not yet open</span>.
                Please check back soon for the official registration window and
                final dates.
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
