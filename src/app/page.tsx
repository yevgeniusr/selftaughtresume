import { HeroForm } from '@/components/form';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import * as m from '@/paraglide/messages';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="container mt-10 flex flex-col items-center gap-3 text-center md:mt-16">
        <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
          {m.nextjs_starter_template_headline()}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          {m.nextjs_starter_template_description()}
        </p>
        <div className="mt-4 w-full max-w-md">
          <HeroForm />
        </div>
        <div className="mt-8 flex w-full justify-center">
          <Image 
            src="/hero-image.svg" 
            alt="YouTube to Resume Transformation" 
            width={600} 
            height={300}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mt-20 flex flex-col items-center">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">You Learn Every Day. But How Do You Show It?</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl text-center">
          You spend hours devouring educational content on YouTube, mastering everything from coding languages and design principles to marketing strategies and complex theories. You know you've gained valuable skills. But when it comes to your resume or proving your expertise, that informal learning often feels invisible. Traditional credentials don't capture the depth and dedication of your self-taught journey.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg border p-6 shadow-sm">
            <Icons.search className="mb-4 size-10 text-primary" />
            <h3 className="mb-2 text-center text-lg font-semibold">Struggling to quantify skills</h3>
            <p className="text-muted-foreground text-center text-sm">Hard to measure what you've learned from online videos</p>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-6 shadow-sm">
            <Icons.clock className="mb-4 size-10 text-primary" />
            <h3 className="mb-2 text-center text-lg font-semibold">Uncredited learning hours</h3>
            <p className="text-muted-foreground text-center text-sm">Hours of valuable education missing from your resume</p>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-6 shadow-sm">
            <Icons.certificate className="mb-4 size-10 text-primary" />
            <h3 className="mb-2 text-center text-lg font-semibold">Proving dedication</h3>
            <p className="text-muted-foreground text-center text-sm">Difficulty showing commitment to specific knowledge areas</p>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-6 shadow-sm">
            <Icons.badge className="mb-4 size-10 text-primary" />
            <h3 className="mb-2 text-center text-lg font-semibold">Lack of "official" recognition</h3>
            <p className="text-muted-foreground text-center text-sm">Self-directed efforts aren't seen as legitimate</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mt-20 flex flex-col items-center bg-secondary/50 py-16 rounded-lg">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Introducing SelfTaughtResume.com: Validate Your YouTube Education</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl text-center text-lg">
          We believe your self-driven learning deserves recognition. SelfTaughtResume.com is an AI-powered platform designed specifically for motivated learners like you. By analyzing the educational content within your YouTube watch history, we help you validate, quantify, and showcase the knowledge you've worked so hard to acquire.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="container mt-20 flex flex-col items-center">
        <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">Unlock Your Learning Data in 3 Simple Steps</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Icons.download className="size-8" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Export Your History</h3>
            <p className="text-muted-foreground mt-2 text-center">
              Easily download your YouTube watch history using Google Takeout. This standard process keeps you in full control of your data.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Icons.upload className="size-8" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Upload Securely</h3>
            <p className="text-muted-foreground mt-2 text-center">
              Upload your exported history file directly to our secure platform. Your privacy is our priority.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Icons.brain className="size-8" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">AI-Powered Analysis</h3>
            <p className="text-muted-foreground mt-2 text-center">
              Our intelligent algorithms analyze your viewing patterns, identifying educational topics, estimating time invested, and extracting key insights.
            </p>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="container mt-20 flex flex-col items-center">
        <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">Transform Your Watch History into Powerful Assets</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
              <Icons.fileText className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Generate Concrete Resume Evidence</h3>
            <p className="text-muted-foreground">
              Create specific, data-backed bullet points for your resume linking your skills to your learning efforts. Make your self-taught skills undeniable.
            </p>
          </div>
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
              <Icons.barChart className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Visualize Your Learning Journey</h3>
            <p className="text-muted-foreground">
              Gain clarity on your study habits. See visual breakdowns of time spent per topic, track your learning consistency, and understand your educational trajectory.
            </p>
          </div>
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
              <Icons.lightbulb className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Discover Targeted Learning Resources</h3>
            <p className="text-muted-foreground">
              Based on your viewing patterns, get personalized AI recommendations for high-quality educational creators and channels to further expand your knowledge.
            </p>
          </div>
          <div className="flex flex-col rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
              <Icons.database className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Build Your "Second Brain"</h3>
            <p className="text-muted-foreground">
              Automatically extract and organize key concepts, summaries, and insights from the educational videos you've watched into a searchable personal knowledge base.
            </p>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="container mt-20 flex flex-col items-center bg-secondary/50 py-16 rounded-lg">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">The SelfTaughtResume Difference: Passive Data, Active Proof</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl text-center text-lg">
          We're pioneering a new way to validate informal learning. Unlike traditional methods, SelfTaughtResume.com leverages the data you already generate through passive consumption (your watch history) and turns it into active, quantifiable proof of your knowledge and dedication. It's the missing link for self-learners.
        </p>
      </section>

      {/* Target Audience Section */}
      <section className="container mt-20 flex flex-col items-center">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Built for the Curious and Driven</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl text-center">
          Are you a self-taught developer, designer, marketer, artist, entrepreneur, student, or lifelong learner who relies on YouTube to level up your skills? If you're passionate about learning and want your efforts recognized, SelfTaughtResume.com is for you.
        </p>
      </section>

      {/* CTA Section */}
      <section className="container mt-20 flex flex-col items-center bg-primary/5 py-16 rounded-lg">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Ready to Get Credit for Every Hour You Learn?</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl text-center">
          Stop letting your valuable self-education fade into the background. Sign up today and start transforming your YouTube watch history into tangible proof of your skills and dedication.
        </p>
        <Button size="lg" className="text-lg">
          {m.get_started()}
        </Button>
        <p className="text-muted-foreground mt-4 text-xs">
          Requires manual export & upload of your YouTube watch history via Google Takeout for analysis.
        </p>
      </section>

      {/* Privacy Section */}
      <section className="container mt-20 mb-20 flex flex-col items-center">
        <h2 className="mb-6 text-center text-xl font-bold">Your Data, Your Control</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl text-center text-sm">
          We understand the importance of privacy. You manually provide your watch history data through Google Takeout, ensuring you know exactly what you're sharing. We are committed to handling your information securely and responsibly.
        </p>
        <Button variant="link" size="sm">
          Privacy Policy
        </Button>
      </section>
    </main>
  );
};

export default Home;
