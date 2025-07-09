'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm an{' '}
        <span className="font-medium">experienced and impact-driven Senior Software Engineer</span>{' '}
        with over <span className="font-medium">9 years</span> of expertise in building scalable,
        cloud-native, and high-performance software solutions. I specialize in{' '}
        <span className="font-medium">full-stack JavaScript development</span> using{' '}
        <span className="font-medium">React, React Native, Node.js, and TypeScript</span>, along
        with deep proficiency in{' '}
        <span className="font-medium">AWS infrastructure and serverless architecture</span>.
      </p>

      <p className="mb-3">
        I’m a systems thinker focused on{' '}
        <span className="font-medium">scalability, reliability, and developer velocity</span>. I've
        led monolith-to-microservices migrations, built event-driven architectures, implemented
        CI/CD pipelines, and delivered mission-critical features with{' '}
        <span className="font-medium">99.99% uptime guarantees</span>.
      </p>

      <p className="mb-3">
        I'm an{' '}
        <span className="font-medium">
          AWS Certified Solutions Architect, DevOps Engineer, and Developer
        </span>{' '}
        with proven experience across{' '}
        <span className="font-medium">Lambda, API Gateway, DynamoDB, S3, and CloudFormation</span>.
        Beyond coding, I mentor teams, improve engineering culture, and deliver business value
        through design-first thinking.
      </p>
    </motion.section>
  );
}
