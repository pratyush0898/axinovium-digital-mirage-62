
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export const Newsletter = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // This will be connected to Supabase later
    toast({
      title: "Success!",
      description: "You're now subscribed to the newsletter!",
      className: "bg-gradient-to-r from-blue-900/80 to-purple-900/80 border border-white/20 text-white shadow-lg",
    });
    
    console.log("Email to add to newsletter_subscribers table:", values.email);
    form.reset();
  };

  return (
    <div className="py-16 md:py-24 bg-black overflow-hidden relative">
      {/* Interactive grid background */}
      <div className="interactive-grid"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-7xl font-bold text-center mb-6 md:mb-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text font-orbitron"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient-animation 6.67s linear infinite",
            }}
          >
            Join Mailing List
          </motion.h2>
          
          <div className="w-full max-w-md mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Enter your email address"
                            className="h-14 pl-4 pr-32 text-white bg-black border border-white/20 backdrop-blur-sm rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-black focus:text-white"
                            {...field}
                          />
                          <Button 
                            type="submit" 
                            className="absolute right-1 top-1 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                            disabled={form.formState.isSubmitting}
                          >
                            <Send className="mr-2 h-4 w-4" />
                            Subscribe
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-left pl-4 text-red-400" />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
